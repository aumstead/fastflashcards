import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.css'],
})
export class DeleteUserModalComponent implements OnInit {
  userId: string;

  constructor(
    public bsModalRef: BsModalRef,
    private _adminService: AdminService,
    private _toastr: ToastrService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  deleteUserHandler() {
    this._adminService.deleteUser(this.userId).subscribe(
      (res) => {
        this.bsModalRef.hide();
        this._toastr.success('User deleted.');
        this._router.navigateByUrl(`/admin`);
      },
      (error) => {
        this._toastr.error('Error deleting user.');
        console.error(error);
      }
    );
  }
}
