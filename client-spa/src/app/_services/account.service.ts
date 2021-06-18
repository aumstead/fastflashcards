import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggedInUser } from '../_models/loggedInUser';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { ResetPasswordDTO } from '../_models/resetPasswordDTO';
import { ChangePasswordDTO } from '../_models/changePasswordDTO';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<LoggedInUser>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private _http: HttpClient, private _userService: UserService) {}

  login(model: any) {
    return this._http.post(`${this.baseUrl}/account/login`, model).pipe(
      map((response: LoggedInUser) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  register(model: any) {
    return this._http.post(`${this.baseUrl}/account/register`, model).pipe(
      map(
        (response: LoggedInUser) => {
          const user = response;
          // users are now not automatically logged in. they must confirm email address.
          return user;
        },
        (error) => console.log(error)
      )
    );
  }

  confirmEmail(userId: string, token: string) {
    console.log('account service token:', token);
    return this._http
      .get(
        `${this.baseUrl}/account/confirm-email?userId=${userId}&token=${token}`
      )
      .pipe(
        map((response: LoggedInUser) => {
          const user = response;
          if (user) {
            this.setCurrentUser(user);
          }
        })
      );
  }

  setCurrentUser(user: LoggedInUser) {
    const isAdmin = this.getDecodedToken(user.token).IsAdmin;
    if (isAdmin !== undefined) {
      user.isAdmin = true;
    } else {
      user.isAdmin = false;
    }
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this._userService.userCache = null;
  }

  getDecodedToken(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  forgotPassword(email: string) {
    console.log('acct service email:', email);
    return this._http
      .post(`${this.baseUrl}/account/ForgotPassword?email=${email}`, {})
      .pipe(
        map((response: any) => {
          console.log('account service pipe response:', response);
        })
      );
  }

  resetPassword(dto: ResetPasswordDTO) {
    return this._http.post(`${this.baseUrl}/account/ResetPassword`, dto).pipe(
      map((response: any) => {
        console.log('account service pipe response:', response);
      })
    );
  }

  changePassword(dto: ChangePasswordDTO) {
    return this._http.post(`${this.baseUrl}/account/ChangePassword`, dto).pipe(
      map((response: any) => {
        console.log('account service pipe response:', response);
      })
    );
  }
}
