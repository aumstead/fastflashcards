import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Deck } from 'src/app/_models/deck';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-view-deck',
  templateUrl: './view-deck.component.html',
  styleUrls: ['./view-deck.component.css'],
})
export class ViewDeckComponent implements OnInit {
  user;
  userId;
  deck: Deck;
  deckId: number;

  constructor(
    private _adminService: AdminService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this._route.snapshot.paramMap.get('id');
    this.deckId = parseInt(this._route.snapshot.paramMap.get('deckId'));
    this._adminService.getUser(this.userId).subscribe((res: any) => {
      this.user = res;
      this.deck = this.user.decks.find((deck: Deck) => deck.id === this.deckId);
    });
  }
}
