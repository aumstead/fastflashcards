import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = environment.apiUrl;
  userCache;

  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get(`${this.baseUrl}/admin/getusers`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getUser(id: string) {
    if (
      this.userCache !== undefined &&
      this.userCache !== null &&
      id === this.userCache.id
    ) {
      return of(this.userCache);
    }

    return this._http.get(`${this.baseUrl}/admin?id=${id}`).pipe(
      map((user) => {
        this.userCache = user;
        return user;
      })
    );
  }

  editEmailConfirmed(emailConfirmed: boolean, id: string) {
    return this._http.put(
      `${this.baseUrl}/admin/UpdateEmailConfirmed?emailConfirmed=${emailConfirmed}&id=${id}`,
      {}
    );
  }

  editPassword(newPassword: string, id: string) {
    const updatePasswordObj = {
      newPassword: newPassword,
      id: id,
    };
    return this._http.put(
      `${this.baseUrl}/admin/UpdatePassword`,
      updatePasswordObj
    );
  }

  deleteUser(userId: string) {
    return this._http.post(`${this.baseUrl}/admin/DeleteUser?id=${userId}`, {});
  }
}
