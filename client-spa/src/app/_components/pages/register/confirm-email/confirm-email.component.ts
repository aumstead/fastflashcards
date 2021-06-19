import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css'],
})
export class ConfirmEmailComponent implements OnInit {
  userId: string;
  token: string;
  confirmingEmail: boolean;
  confirmed = false;
  errors = {
    unauthorized: false,
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _accountService: AccountService,
    private _titleService: Title
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Email Confirmation | FastFlashCards.com`);
    this.confirmingEmail = true;
    this.userId = this._route.snapshot.queryParamMap.get('userId');
    this.token = this._route.snapshot.queryParamMap.get('token');
    this._accountService.confirmEmail(this.userId, this.token).subscribe(
      (response) => {
        this.confirmingEmail = false;
        this.confirmed = true;
        // this._router.navigateByUrl('/user/decks');
      },
      (error) => {
        this.confirmingEmail = false;
        this.confirmed = false;
        if (error.error.type === 'email not confirmed') {
          this.errors.unauthorized = true;
        }
      }
    );
  }
}
