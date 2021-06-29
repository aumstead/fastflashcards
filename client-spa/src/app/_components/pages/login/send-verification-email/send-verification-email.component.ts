import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-send-verification-email',
  templateUrl: './send-verification-email.component.html',
  styleUrls: ['./send-verification-email.component.css'],
})
export class SendVerificationEmailComponent implements OnInit {
  requestVerificationEmailForm: FormGroup;
  validationErrors: string[] = [];
  errors = {
    email: false,
  };

  constructor(
    private _fb: FormBuilder,
    private _accountService: AccountService,
    private _router: Router,
    private _titleService: Title
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(
      `Request Verification Email | FastFlashCards.com`
    );
    this.initializeForm();
  }

  initializeForm() {
    this.requestVerificationEmailForm = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
          Validators.email,
        ],
      ],
    });
  }

  requestEmailHandler() {
    this._accountService
      .requestVerificationEmail(
        this.requestVerificationEmailForm.get('email').value
      )
      .subscribe(
        (response) => {
          this._router.navigateByUrl('/login/verification-email-success');
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
