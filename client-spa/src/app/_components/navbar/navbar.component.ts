import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { LoggedInUser } from 'src/app/_models/loggedInUser';
import { AccountService } from 'src/app/_services/account.service';
import { DeckService } from 'src/app/_services/deck.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  deckId: number;

  constructor(
    public _accountService: AccountService,
    public _router: Router,
    private _route: ActivatedRoute,
    private _deckService: DeckService
  ) {}

  currentUser: LoggedInUser;

  ngOnInit(): void {
    // this.deckId = parseInt(this._route.snapshot.paramMap.get('id'));
    this.getCurrentDeckId();
    this._accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      this.currentUser = user;
    });
  }

  getCurrentDeckId() {
    this._deckService.currentDeckId$.subscribe((deckId) => {
      this.deckId = deckId;
    });
  }

  logout() {
    this._accountService.logout();
    this.deckId = null;
    this._router.navigateByUrl('/');
  }
}
