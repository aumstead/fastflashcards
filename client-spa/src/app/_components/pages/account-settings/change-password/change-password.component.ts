import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ChangePasswordDTO } from 'src/app/_models/changePasswordDTO';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  validationErrors: string[] = [];
  errors = {
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  };

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    public _accountService: AccountService,
    private _titleService: Title
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Change Password | FastFlashCards.com`);
    this.initializeForm();
  }

  initializeForm() {
    this.changePasswordForm = this._fb.group({
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: [
        '',
        [Validators.required, this.matchValues('newPassword')],
      ],
    });
    this.changePasswordForm.controls.newPassword.valueChanges.subscribe(() => {
      this.changePasswordForm.controls.confirmNewPassword.updateValueAndValidity();
    });
  }

  changePassword() {
    const dto: ChangePasswordDTO = {
      currentPassword: this.changePasswordForm.value.currentPassword,
      newPassword: this.changePasswordForm.value.newPassword,
    };
    this._accountService.changePassword(dto).subscribe(
      () => {
        this._router.navigateByUrl(
          `/user/account-settings/change-password/success`
        );
      },
      (error) => {
        this.validationErrors = error;
      }
    );
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
    };
  }
}
