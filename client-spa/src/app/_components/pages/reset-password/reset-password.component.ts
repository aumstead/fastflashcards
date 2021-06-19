import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordDTO } from 'src/app/_models/resetPasswordDTO';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  email: string;
  token: string;
  resetPasswordForm: FormGroup;
  validationErrors: string[] = [];
  errors = {
    password: false,
    confirmPassword: false,
    email: false,
    token: false,
  };

  constructor(
    public _accountService: AccountService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _titleService: Title
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Reset Password | FastFlashCards.com`);
    this.initializeForm();
    this.email = this._route.snapshot.queryParamMap.get('email');
    this.token = this._route.snapshot.queryParamMap.get('token');
    if (!this.email) this.errors.email = true;
    if (!this.token) this.errors.token = true;
  }

  initializeForm() {
    this.resetPasswordForm = this._fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [
        '',
        [Validators.required, this.matchValues('password')],
      ],
    });
    this.resetPasswordForm.controls.password.valueChanges.subscribe(() => {
      this.resetPasswordForm.controls.confirmPassword.updateValueAndValidity();
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
    };
  }

  resetPassword() {
    const dto: ResetPasswordDTO = {
      email: this.email,
      token: this.token,
      password: this.resetPasswordForm.value.password,
    };
    this._accountService.resetPassword(dto).subscribe(
      (response) => {
        this._router.navigateByUrl(`/reset-password/success`);
      },
      (error) => {
        this.validationErrors = error;
      }
    );
  }
}
