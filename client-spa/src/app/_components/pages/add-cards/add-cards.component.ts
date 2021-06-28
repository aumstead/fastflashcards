import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Deck } from 'src/app/_models/deck';
import { LoggedInUser } from 'src/app/_models/loggedInUser';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { CardService } from 'src/app/_services/card.service';
import { DeckService } from 'src/app/_services/deck.service';
import { UserService } from 'src/app/_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-cards',
  templateUrl: './add-cards.component.html',
  styleUrls: ['./add-cards.component.css'],
})
export class AddCardsComponent implements OnInit {
  loggedInUser: LoggedInUser;
  addCardForm: FormGroup;
  addCardQueue = [];
  deckId: number;

  selectedDeck: Deck;
  user: User;

  constructor(
    private _route: ActivatedRoute,
    private _cardService: CardService,
    private _fb: FormBuilder,
    private _userService: UserService,
    private _accountService: AccountService,
    private _deckService: DeckService,
    private _toastr: ToastrService,
    private _titleService: Title
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Add Cards | FastFlashCards.com`);
    this.deckId = parseInt(this._route.snapshot.paramMap.get('id'));
    this.getLoggedInUser();
    this.loadUser();
    this.initializeForm();
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

  selectDeck(id: number) {
    this.selectedDeck = this.user.decks.find((deck) => deck.id === id);
    if (!this.selectedDeck) {
      console.error('Deck ID from route is not in cache.');
      this._toastr.error('Deck not found.');
      this.selectedDeck = this.user.decks[0];
    }
    this.deckId = this.selectedDeck.id;
    this._deckService.setCurrentDeckId(this.selectedDeck.id);
  }

  initializeForm() {
    this.addCardForm = this._fb.group({
      front: [''],
      back: [''],
    });
  }

  addCardToQueue() {
    const newCard = {
      front: this.addCardForm.value.front,
      back: this.addCardForm.value.back,
      appUserId: this.user.id,
    };
    this.addCardQueue.push(newCard);

    this.addCardForm.reset();
  }

  saveAllToDatabase() {
    this._cardService
      .createCards(this.deckId, this.selectedDeck.appUserId, this.addCardQueue)
      .subscribe((res: any) => {
        this.selectedDeck.cards = this.selectedDeck.cards.concat(res);
        this.addCardQueue = [];
      });
  }
}
