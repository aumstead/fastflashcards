import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-edit-email-confirmed-modal',
  templateUrl: './edit-email-confirmed-modal.component.html',
  styleUrls: ['./edit-email-confirmed-modal.component.css'],
})
export class EditEmailConfirmedModalComponent implements OnInit {
  emailConfirmed: boolean;
  userId: string;
  parentNgOnInit;

  constructor(
    public bsModalRef: BsModalRef,
    private _adminService: AdminService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  editHandler() {
    this._adminService
      .editEmailConfirmed(this.emailConfirmed, this.userId)
      .subscribe(
        (res) => {
          this.bsModalRef.hide();
          // this.parentNgOnInit();
          if (
            this._adminService.userCache !== undefined &&
            this._adminService.userCache !== undefined
          ) {
            this._adminService.userCache.emailConfirmed = this.emailConfirmed;
          }
          this._toastr.success('Email confirmed updated.');
        },
        (error) => {
          this._toastr.error('Error updading email confirmed.');
          console.error(error);
        }
      );
  }
}
