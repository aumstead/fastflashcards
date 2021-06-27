import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DeleteDataDTO } from 'src/app/_models/deleteDataDTO';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css'],
})
export class DeleteDataComponent implements OnInit {
  deleteDataForm: FormGroup;
  validationErrors: string[] = [];
  errors = {
    password: false,
  };

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    public _accountService: AccountService,
    private _titleService: Title
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Delete Data | FastFlashCards.com`);
    this.initializeForm();
  }

  initializeForm() {
    this.deleteDataForm = this._fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  deleteData() {
    const dto: DeleteDataDTO = {
      password: this.deleteDataForm.value.password,
    };
    this._accountService.deleteData(dto).subscribe(
      () => {
        this._router.navigateByUrl(
          `/user/account-settings/delete-data/success`
        );
        this._accountService.logout();
      },
      (error) => {
        console.log('in deleteData component:', error);
        if (error.error.type === 'password') {
          this.errors.password = true;
        }
      }
    );
  }
}
