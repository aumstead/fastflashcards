import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from 'src/app/_models/user';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users: User[] = [];

  constructor(
    private _titleService: Title,
    private _adminService: AdminService
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Admin | FastFlashCards.com`);
    this._adminService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
