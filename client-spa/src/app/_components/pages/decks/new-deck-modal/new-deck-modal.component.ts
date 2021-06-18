import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DeckService } from 'src/app/_services/deck.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-deck-modal',
  templateUrl: './new-deck-modal.component.html',
  styleUrls: ['./new-deck-modal.component.css'],
})
export class NewDeckModalComponent implements OnInit {
  name: string;
  loadUser;

  constructor(
    private _deckService: DeckService,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit(): void {}

  createNewDeck(name: string) {
    this._deckService.createDeck(name).subscribe(() => {
      this.bsModalRef.hide();
      this.loadUser();
    });
  }
}
