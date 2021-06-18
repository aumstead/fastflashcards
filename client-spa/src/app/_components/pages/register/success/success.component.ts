import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  email: string;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.email = this._route.snapshot.paramMap.get('email');
  }
}
