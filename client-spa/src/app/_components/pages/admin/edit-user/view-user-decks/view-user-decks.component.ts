import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-view-user-decks',
  templateUrl: './view-user-decks.component.html',
  styleUrls: ['./view-user-decks.component.css'],
})
export class ViewUserDecksComponent implements OnInit {
  user;
  userId;

  constructor(
    private _adminService: AdminService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this._route.snapshot.paramMap.get('id');
    this._adminService.getUser(this.userId).subscribe((res: any) => {
      this.user = res;
    });
  }
}
