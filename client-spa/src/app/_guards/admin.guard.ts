import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private _accountService: AccountService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this._accountService.currentUser$.pipe(
      map((user) => {
        if (user.isAdmin) return true;
        this.router.navigateByUrl('/not-found');
      })
    );
  }
}
