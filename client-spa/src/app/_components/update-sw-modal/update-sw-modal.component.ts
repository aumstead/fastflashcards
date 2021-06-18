import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-update-sw-modal',
  templateUrl: './update-sw-modal.component.html',
  styleUrls: ['./update-sw-modal.component.css'],
})
export class UpdateSwModalComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}

  reloadPage() {
    window.location.reload();
  }
}
