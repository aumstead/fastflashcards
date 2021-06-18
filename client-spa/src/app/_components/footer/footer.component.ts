import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  year;

  constructor() {}

  ngOnInit(): void {
    let dateObj = new Date();
    this.year = dateObj.getFullYear();
  }
}
