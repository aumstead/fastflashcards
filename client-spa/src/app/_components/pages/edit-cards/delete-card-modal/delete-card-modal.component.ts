import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Card } from 'src/app/_models/card';
import { CardService } from 'src/app/_services/card.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-delete-card-modal',
  templateUrl: './delete-card-modal.component.html',
  styleUrls: ['./delete-card-modal.component.css'],
})
export class DeleteCardModalComponent implements OnInit {
  selectedCard: Card;
  editCardForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private _cardService: CardService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {}

  deleteCard(id: number) {
    this._cardService.deleteCard(id).subscribe(() => {
      // in the subscribe callback, update the cache
      for (let i = 0; i < this._userService.userCache.decks.length; i++) {
        if (
          this._userService.userCache.decks[i].id === this.selectedCard.deckId
        ) {
          let card = this._userService.userCache.decks[i].cards.find(
            (card) => card.id === this.selectedCard.id
          );
          let cardIdx =
            this._userService.userCache.decks[i].cards.indexOf(card);
          this._userService.userCache.decks[i].cards.splice(cardIdx, 1);
          break;
        }
      }

      this.editCardForm.reset();
      this.selectedCard = null;
      this.editCardForm.controls['front'].disable();
      this.editCardForm.controls['back'].disable();
      this.editCardForm.controls['order'].disable();
      this.editCardForm.controls['deckId'].disable();
      this.bsModalRef.hide();
    });
  }
}
