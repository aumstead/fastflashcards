import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  baseUrl = environment.apiUrl;

  // persisting deck across pages
  private currentDeckIdSource = new BehaviorSubject<number>(null);
  currentDeckId$ = this.currentDeckIdSource.asObservable();

  constructor(private _http: HttpClient, private _userService: UserService) {}

  createDeck(name: string) {
    return this._http.post(`${this.baseUrl}/deck?deckName=${name}`, {}).pipe(
      map((deck: any) => {
        deck.cards = [];
        this._userService.userCache.decks.push(deck);
      })
    );
  }

  setCurrentDeckId(id: number) {
    this.currentDeckIdSource.next(id);
  }

  getDeckById(id: number) {
    const deckFromCache = this._userService.userCache?.decks.find(
      (deck) => deck.id === id
    );

    if (deckFromCache) {
      return of(deckFromCache);
    }

    return this._http.get(`${this.baseUrl}/deck?id=${id}`);
  }

  editDeckName(name: string, id: number) {
    return this._http.put(`${this.baseUrl}/deck?name=${name}&id=${id}`, {});
  }

  deleteDeck(id: number) {
    return this._http.delete(`${this.baseUrl}/deck/${id}`);
  }
}
