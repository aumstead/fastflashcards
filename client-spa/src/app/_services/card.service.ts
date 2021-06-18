import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card } from '../_models/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  baseUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  createCards(deckId: number, appUserId: string, cards: Card[]) {
    return this._http.post(`${this.baseUrl}/card`, {
      deckId: deckId,
      appUserId: appUserId,
      cards: cards,
    });
    // return this._http.post(`${this.baseUrl}/deck?deckName=${name}`, {}).pipe(
    //   map((deck: any) => {
    //     deck.cards = [];
    //     this._userService.userCache.decks.push(deck);
    //   })
    // );
  }

  editCard(card: Card) {
    return this._http.put(`${this.baseUrl}/card/${card.id}`, {
      id: card.id,
      front: card.front,
      back: card.back,
      order: card.order,
      deckId: card.deckId,
      appUserId: card.appUserId,
    });
  }

  deleteCard(id: number) {
    return this._http.delete(`${this.baseUrl}/card/${id}`);
  }
}
