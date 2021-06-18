import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
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
    this._titleService.setTitle(`Forgot Password | FastFlashCards.com`);
    this.initializeForm();
  }

  initializeForm() {
    this.forgotPasswordForm = this._fb.group({
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

  forgotPassword() {
    this.errors = {
      email: false,
    };

    this._accountService
      .forgotPassword(this.forgotPasswordForm.get('email').value)
      .subscribe(
        (response) => {
          console.log('forgot-password component', response);
          this._router.navigateByUrl('/login/forgot-password-confirmation');
        },
        (error) => {
          console.log('forgot pass error', error);
        }
      );
  }
}
