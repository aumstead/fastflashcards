import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Deck } from 'src/app/_models/deck';
import { LoggedInUser } from 'src/app/_models/loggedInUser';
import { DeckService } from 'src/app/_services/deck.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-edit-name-modal',
  templateUrl: './edit-name-modal.component.html',
  styleUrls: ['./edit-name-modal.component.css'],
})
export class EditNameModalComponent implements OnInit {
  name: string;
  deckId: number;

  constructor(
    public bsModalRef: BsModalRef,
    private _deckService: DeckService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {}

  editDeckName(name: string, deckId: number) {
    this._deckService.editDeckName(name, deckId).subscribe(() => {
      // in the subscribe callback, update the cache
      let deckToUpdate = this._userService.userCache.decks.find(
        (deck) => deck.id === deckId
      );
      deckToUpdate.name = name;
      this.bsModalRef.hide();
    });
  }
}
