import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiUrl;
  user: User;
  userCache: User;

  constructor(private _http: HttpClient) {}

  getUser(id: string) {
    if (this.userCache !== undefined && this.userCache !== null) {
      return of(this.userCache);
    }

    return this._http.get<User>(`${this.baseUrl}/user?id=${id}`).pipe(
      map((user) => {
        user.decks.forEach((deck) => {
          deck.cards.sort((a, b) => a.order - b.order);
        });
        this.userCache = user;
        return user;
      })
    );
  }
}
