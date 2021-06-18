import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Deck } from 'src/app/_models/deck';
import { DeckService } from 'src/app/_services/deck.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteDeckModalComponent } from './delete-deck-modal/delete-deck-modal.component';
import { EditNameModalComponent } from './edit-name-modal/edit-name-modal.component';
import { LoggedInUser } from 'src/app/_models/loggedInUser';
import { UserService } from 'src/app/_services/user.service';
import { AccountService } from 'src/app/_services/account.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-deck-page',
  templateUrl: './deck-page.component.html',
  styleUrls: ['./deck-page.component.css'],
})
export class DeckPageComponent implements OnInit {
  loggedInUser: LoggedInUser;
  deck: Deck;
  deckId: number;

  // delete deck
  bsModalRef: BsModalRef;

  constructor(
    private _route: ActivatedRoute,
    private _deckService: DeckService,
    private _modalService: BsModalService,
    private _userService: UserService,
    private _accountService: AccountService,
    private _titleService: Title
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Decks | FastFlashCards.com`);
    this.deckId = parseInt(this._route.snapshot.paramMap.get('id'));
    this._deckService.setCurrentDeckId(this.deckId);
    if (!this._userService.userCache) {
      this.getLoggedInUser();
      this._userService.getUser(this.loggedInUser.id).subscribe((user) => {
        const deckFromCache = user.decks.find(
          (deck) => deck.id === this.deckId
        );
        if (!deckFromCache) {
          console.error('Deck ID not found in cache.');
        }
        this.deck = deckFromCache;
      });
    } else {
      this._deckService.getDeckById(this.deckId).subscribe((deck: Deck) => {
        console.log('in else, meaning we have a cache. returned deck:', deck);
        this.deck = deck;
      });
    }
  }

  getLoggedInUser() {
    this._accountService.currentUser$.subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  openDeleteDeckModal() {
    this.bsModalRef = this._modalService.show(DeleteDeckModalComponent);
    this.bsModalRef.content.deckId = this.deckId;
  }

  openEditDeckNameModal() {
    this.bsModalRef = this._modalService.show(EditNameModalComponent);
    this.bsModalRef.content.deckId = this.deckId;
  }
}
