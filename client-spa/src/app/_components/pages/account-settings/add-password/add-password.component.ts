import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AddPasswordDTO } from 'src/app/_models/addPasswordDTO';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.css'],
})
export class AddPasswordComponent implements OnInit {
  addPasswordForm: FormGroup;
  validationErrors: string[] = [];
  errors = {
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
    this._titleService.setTitle(`Add Password | FastFlashCards.com`);
    this.initializeForm();
  }

  initializeForm() {
    this.addPasswordForm = this._fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: [
        '',
        [Validators.required, this.matchValues('newPassword')],
      ],
    });
    this.addPasswordForm.controls.newPassword.valueChanges.subscribe(() => {
      this.addPasswordForm.controls.confirmNewPassword.updateValueAndValidity();
    });
  }

  addPassword() {
    const dto: AddPasswordDTO = {
      newPassword: this.addPasswordForm.value.newPassword,
    };
    this._accountService.addPassword(dto).subscribe(
      () => {
        this._router.navigateByUrl(
          `/user/account-settings/add-password/success`
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
