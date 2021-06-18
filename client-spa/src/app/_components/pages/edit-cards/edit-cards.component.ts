import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/_models/card';
import { Deck } from 'src/app/_models/deck';
import { LoggedInUser } from 'src/app/_models/loggedInUser';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { CardService } from 'src/app/_services/card.service';
import { DeckService } from 'src/app/_services/deck.service';
import { UserService } from 'src/app/_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteCardModalComponent } from './delete-card-modal/delete-card-modal.component';

@Component({
  selector: 'app-edit-cards',
  templateUrl: './edit-cards.component.html',
  styleUrls: ['./edit-cards.component.css'],
})
export class EditCardsComponent implements OnInit {
  loggedInUser: LoggedInUser;
  user: User;
  deckId: number;
  editCardForm: FormGroup;

  selectedDeck: Deck;
  selectedCard: Card;

  // delete card
  bsModalRef: BsModalRef;

  // ngx-pagination
  collection: Card[];
  p = 1;
  itemsPerPageForm = new FormControl(10);

  constructor(
    private _userService: UserService,
    private _accountService: AccountService,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _cardService: CardService,
    private _deckService: DeckService,
    private _toastr: ToastrService,
    private _titleService: Title,
    private _modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle('Edit Cards | FastFlashCards.com');
    this.deckId = parseInt(this._route.snapshot.paramMap.get('id'));
    this.getLoggedInUser();
    this.initializeForm();
    this.loadUser();
  }

  getLoggedInUser() {
    this._accountService.currentUser$.subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  loadUser() {
    this._userService.getUser(this.loggedInUser.id).subscribe((user) => {
      this.user = user;
      if (this.user.decks.length === 0) return;
      else if (this.deckId) {
        this.selectDeck(this.deckId);
      } else {
        this.selectDeck(this._userService.userCache.decks[0].id);
      }
    });
  }

  initializeForm() {
    this.editCardForm = this._fb.group({
      front: [{ value: '', disabled: true }],
      back: [{ value: '', disabled: true }],
      order: [{ value: '', disabled: true }],
      deckId: [{ value: '', disabled: true }],
    });
  }

  selectDeck(id: number) {
    this.selectedDeck = this.user.decks.find((deck) => deck.id === id);
    if (!this.selectedDeck) {
      console.error('Deck ID from route is not in cache.');
      this._toastr.error('Deck not found.');
      this.selectedDeck = this.user.decks[0];
    }
    this.collection = this.selectedDeck.cards;
    this._deckService.setCurrentDeckId(this.selectedDeck.id);
    this.selectedCard = null;
    this.editCardForm.controls['front'].disable();
    this.editCardForm.controls['back'].disable();
    this.editCardForm.controls['order'].disable();
    this.editCardForm.controls['deckId'].disable();
  }

  selectCard(id: number) {
    if (this.selectedCard && this.selectedCard.id === id) {
      this.selectedCard = null;
      this.editCardForm.controls['front'].disable();
      this.editCardForm.controls['back'].disable();
      this.editCardForm.controls['order'].disable();
      this.editCardForm.controls['deckId'].disable();
      return;
    }
    this.selectedCard = this.selectedDeck.cards.find((card) => card.id === id);
    this.setFormValues();
    this.editCardForm.enable();
  }

  getForm(e: FormGroup) {
    this.editCardForm = e;
  }

  setFormValues() {
    this.editCardForm.setValue({
      front: this.selectedCard.front,
      back: this.selectedCard.back,
      order: this.selectedCard.order,
      deckId: this.selectedCard.deckId,
    });
  }

  pageBoundsCorrection(e) {
    this.p = e.value;
  }

  saveChanges() {
    const updatedCard = {
      id: this.selectedCard.id,
      front: this.editCardForm.value.front,
      back: this.editCardForm.value.back,
      order: this.editCardForm.value.order,
      deckId: parseInt(this.editCardForm.value.deckId),
      appUserId: this.selectedCard.appUserId,
    };

    this._cardService.editCard(updatedCard).subscribe(() => {
      // in the subscribe callback, update the cache
      if (this.selectedCard.deckId === updatedCard.deckId) {
        // then I can search the userCache by matching deckId's
        for (let i = 0; i < this._userService.userCache.decks.length; i++) {
          let needToSortFlag = false;
          if (this._userService.userCache.decks[i].id === updatedCard.deckId) {
            for (
              let j = 0;
              j < this._userService.userCache.decks[i].cards.length;
              j++
            ) {
              if (
                this._userService.userCache.decks[i].cards[j].id ===
                updatedCard.id
              ) {
                this._userService.userCache.decks[i].cards[j].front =
                  updatedCard.front;
                this._userService.userCache.decks[i].cards[j].back =
                  updatedCard.back;
                if (
                  this._userService.userCache.decks[i].cards[j].order !==
                  updatedCard.order
                ) {
                  this._userService.userCache.decks[i].cards[j].order =
                    updatedCard.order;
                  needToSortFlag = true;
                }
                break;
              }
            }
            if (needToSortFlag) {
              this._userService.userCache.decks[i].cards.sort(
                (a, b) => a.order - b.order
              );
              needToSortFlag = false;
            }
            break;
          }
        }
      } else {
        // the deckId has been changed, so must search userCache to find card by id
        for (let i = 0; i < this._userService.userCache.decks.length; i++) {
          let card = this._userService.userCache.decks[i].cards.find(
            (card) => card.id === updatedCard.id
          );
          if (card) {
            card.front = updatedCard.front;
            card.back = updatedCard.back;
            card.deckId = updatedCard.deckId;
            let cardIdx =
              this._userService.userCache.decks[i].cards.indexOf(card);
            this._userService.userCache.decks[i].cards.splice(cardIdx, 1);

            // loop through decks again and find the updatedCard's new deck
            for (let j = 0; j < this._userService.userCache.decks.length; j++) {
              if (
                this._userService.userCache.decks[j].id === updatedCard.deckId
              ) {
                // update order property according to new deck
                this._userService.userCache.decks[j].cards.sort(
                  (a, b) => a.order - b.order
                );
                const arrLength =
                  this._userService.userCache.decks[j].cards.length;
                const lastCard =
                  this._userService.userCache.decks[j].cards[arrLength - 1];
                card.order = lastCard.order + 1;
                this._userService.userCache.decks[j].cards.push(card);
                break;
              }
            }
            break;
          }
        }
      }

      this.editCardForm.reset();
      this.selectedCard = null;
      this.editCardForm.controls['front'].disable();
      this.editCardForm.controls['back'].disable();
      this.editCardForm.controls['order'].disable();
      this.editCardForm.controls['deckId'].disable();
    });
  }

  openDeleteCardModal() {
    this.bsModalRef = this._modalService.show(DeleteCardModalComponent);
    this.bsModalRef.content.selectedCard = this.selectedCard;
    this.bsModalRef.content.editCardForm = this.editCardForm;
  }
}
