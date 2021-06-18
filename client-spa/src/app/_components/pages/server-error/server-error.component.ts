import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css'],
})
export class ServerErrorComponent implements OnInit {
  error: string;
  constructor(private _route: ActivatedRoute, private _titleService: Title) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Server Error | FastFlashCards.com`);
    this.error = this._route.snapshot.paramMap.get('error');
  }
}
