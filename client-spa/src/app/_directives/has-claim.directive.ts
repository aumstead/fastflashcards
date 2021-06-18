import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { take } from 'rxjs/operators';
import { LoggedInUser } from '../_models/loggedInUser';
import { AccountService } from '../_services/account.service';

@Directive({
  selector: '[appHasClaim]',
})
export class HasClaimDirective implements OnInit {
  user: LoggedInUser;
  @Input() appHasClaim: string[];

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _templateRef: TemplateRef<any>,
    private _accountService: AccountService
  ) {
    this._accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    // clear view if no roles
    if (this.user === null) {
      this._viewContainerRef.clear();
      return;
    }

    if (this.user?.isAdmin && this.appHasClaim.includes('IsAdmin')) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }
}
