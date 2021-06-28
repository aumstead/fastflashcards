import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/_models/user';
import { AdminService } from 'src/app/_services/admin.service';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';
import { EditEmailConfirmedModalComponent } from './edit-email-confirmed-modal/edit-email-confirmed-modal.component';
import { EditPasswordModalComponent } from './edit-password-modal/edit-password-modal.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user;
  userId: string;
  cardCount = 0;

  // modals
  bsModalRef: BsModalRef;

  constructor(
    private _adminService: AdminService,
    private _route: ActivatedRoute,
    private _modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.userId = this._route.snapshot.paramMap.get('id');
    this._adminService.getUser(this.userId).subscribe((res: any) => {
      this.user = res;
      if (this.user.decks.length > 0) {
        this.countCards(this.user.decks);
      }
    });
  }

  countCards(decksArr: any) {
    let count = 0;
    for (let i = 0; i < decksArr.length; i++) {
      let cardsInDeck = decksArr[i].cards.length;
      count += cardsInDeck;
    }
    this.cardCount = count;
  }

  openEditEmailConfirmedModal() {
    this.bsModalRef = this._modalService.show(EditEmailConfirmedModalComponent);
    this.bsModalRef.content.emailConfirmed = this.user.emailConfirmed;
    this.bsModalRef.content.userId = this.userId;
    this.bsModalRef.content.parentNgOnInit = this.ngOnInit.bind(this);
  }

  openEditPasswordModal() {
    this.bsModalRef = this._modalService.show(EditPasswordModalComponent);
    this.bsModalRef.content.userId = this.userId;
  }

  openDeleteUserModal() {
    this.bsModalRef = this._modalService.show(DeleteUserModalComponent);
    this.bsModalRef.content.userId = this.userId;
  }
}
