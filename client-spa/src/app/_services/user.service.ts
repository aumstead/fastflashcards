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
      console.log(
        'userService: using already retrieved userCache',
        this.userCache
      );
      return of(this.userCache);
    }

    return this._http.get<User>(`${this.baseUrl}/user?id=${id}`).pipe(
      map((user) => {
        console.log('user service, user:', user);
        user.decks.forEach((deck) => {
          deck.cards.sort((a, b) => a.order - b.order);
        });
        this.userCache = user;
        console.log('userService: retrieved userCache');
        return user;
      })
    );
  }
}
