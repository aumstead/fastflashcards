import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from 'src/app/_models/loggedInUser';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { UserService } from 'src/app/_services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewDeckModalComponent } from './new-deck-modal/new-deck-modal.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css'],
})
export class DecksComponent implements OnInit {
  loggedInUser: LoggedInUser;
  user: User;
  bsModalRef: BsModalRef;

  constructor(
    private _userService: UserService,
    private _accountService: AccountService,
    private _modalService: BsModalService,
    private _titleService: Title
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Decks | FastFlashCards.com`);
    this.getLoggedInUser();
    this.loadUser();
  }

  loadUser() {
    this._userService.getUser(this.loggedInUser.id).subscribe((user) => {
      this.user = user;
    });
  }

  getLoggedInUser() {
    this._accountService.currentUser$.subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  openCreateDeckModal() {
    this.bsModalRef = this._modalService.show(NewDeckModalComponent);
    this.bsModalRef.content.loadUser = this.loadUser.bind(this);
  }
}
