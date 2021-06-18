import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  validationErrors: string[] = [];

  constructor(
    private _accountService: AccountService,
    private _fb: FormBuilder,
    private _router: Router,
    private _titleService: Title
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Register | FastFlashCards.com`);
    this.initializeForm();
  }

  register() {
    this._accountService.register(this.registerForm.value).subscribe(
      (response) => {
        console.log('register response:', response);
        this._router.navigateByUrl(`/register/success/${response.email}`);
      },
      (error) => {
        this.validationErrors = error;
      }
    );
  }

  initializeForm() {
    this.registerForm = this._fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(40)],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [
        '',
        [Validators.required, this.matchValues('password')],
      ],
    });
    this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
    };
  }
}
