import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-edit-password-modal',
  templateUrl: './edit-password-modal.component.html',
  styleUrls: ['./edit-password-modal.component.css'],
})
export class EditPasswordModalComponent implements OnInit {
  userId: string;
  newPassword: string;

  constructor(
    public bsModalRef: BsModalRef,
    private _adminService: AdminService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  editPasswordHandler() {
    this._adminService.editPassword(this.newPassword, this.userId).subscribe(
      (res) => {
        this.bsModalRef.hide();
        this._toastr.success('Password changed.');
      },
      (error) => {
        this._toastr.error('Error changing password.');
        console.error(error);
      }
    );
  }
}
