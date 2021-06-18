import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoggedInUser } from 'src/app/_models/loggedInUser';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent implements OnInit {
  loggedInUser: LoggedInUser;
  user: User;
  userHasPassword: boolean;

  constructor(
    private _userService: UserService,
    private _accountService: AccountService,
    private _titleService: Title
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Account Settings | FastFlashCards.com`);
    this.getLoggedInUser();
    this.loadUser();
  }

  loadUser() {
    this._userService.getUser(this.loggedInUser.id).subscribe((user) => {
      this.user = user;
      console.log('user in account settings', this.user);
    });
  }

  getLoggedInUser() {
    this._accountService.currentUser$.subscribe((user) => {
      this.loggedInUser = user;
    });
  }
}
