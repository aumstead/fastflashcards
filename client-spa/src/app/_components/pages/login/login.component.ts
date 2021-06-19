import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validationErrors: string[] = [];
  errors = {
    email: false,
    password: false,
    confirmEmail: false,
    loadingProviders: false,
  };

  // external auth
  returnUrl: string = '/user/decks';

  constructor(
    public _accountService: AccountService,
    private _router: Router,
    private _titleService: Title,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Login | FastFlashCards.com`);
    this.initializeForm();
  }

  login() {
    this.errors = {
      email: false,
      password: false,
      confirmEmail: false,
      loadingProviders: false,
    };
    this._accountService.login(this.loginForm.value).subscribe(
      () => {
        this._router.navigateByUrl('/user/decks');
      },
      (error) => {
        if (error.error.type === 'email') {
          this.errors.email = true;
        } else if (error.error.type === 'password') {
          this.errors.password = true;
        } else if (error.error.type === 'confirm email') {
          this.errors.confirmEmail = true;
        }
      }
    );
  }

  initializeForm() {
    this.loginForm = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
          Validators.email,
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
