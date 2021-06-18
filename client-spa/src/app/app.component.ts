import { Component } from '@angular/core';
import { LoggedInUser } from './_models/loggedInUser';
import { AccountService } from './_services/account.service';
import { SwUpdate } from '@angular/service-worker';
import { UpdateSwModalComponent } from './_components/update-sw-modal/update-sw-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bsModalRef: BsModalRef;

  constructor(
    private _accountService: AccountService,
    private swUpdate: SwUpdate,
    private _modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.setCurrentUser();
    if (this.swUpdate.isEnabled) {
      console.log('in swUpdate.isEnabled');
      this.swUpdate.available.subscribe(() => {
        console.log('in swUpdate.available subscription');
        this.openUpdateModal();
      });
    }
  }

  setCurrentUser() {
    const user: LoggedInUser = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this._accountService.setCurrentUser(user);
    }
  }

  openUpdateModal() {
    console.log('in openUpdateModal');
    this.bsModalRef = this._modalService.show(UpdateSwModalComponent);
  }
}
