import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DeckService } from 'src/app/_services/deck.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-delete-deck-modal',
  templateUrl: './delete-deck-modal.component.html',
  styleUrls: ['./delete-deck-modal.component.css'],
})
export class DeleteDeckModalComponent implements OnInit {
  deckId: number;

  constructor(
    public bsModalRef: BsModalRef,
    private _deckService: DeckService,
    private _router: Router,
    private _userService: UserService
  ) {}

  ngOnInit(): void {}

  deleteDeck(id: number) {
    this._deckService.deleteDeck(id).subscribe(() => {
      // in the subscribe callback, update the cache
      let deckToDelete = this._userService.userCache.decks.find(
        (deck) => deck.id === id
      );
      let deckIdx = this._userService.userCache.decks.indexOf(deckToDelete);
      this._userService.userCache.decks.splice(deckIdx, 1);
      this.bsModalRef.hide();
      this._router.navigate(['user/decks']);
    });
  }
}
