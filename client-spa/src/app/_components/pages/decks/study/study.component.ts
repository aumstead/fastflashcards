import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Deck } from 'src/app/_models/deck';
import { DeckService } from 'src/app/_services/deck.service';
import { DeckPageComponent } from '../deck-page/deck-page.component';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css'],
})
export class StudyComponent implements OnInit {
  deck: Deck;
  deckId: number;
  counter: number = 0;
  reveal: Boolean = false;
  finished: Boolean = false;

  // shuffle mode
  shuffleMode = false;
  shuffledDeck = {
    cards: [],
  };

  constructor(
    private _route: ActivatedRoute,
    private _titleService: Title,
    private _deckService: DeckService
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Decks | FastFlashCards.com`);
    this.deckId = parseInt(this._route.snapshot.paramMap.get('id'));
    this._deckService.getDeckById(this.deckId).subscribe((deck: Deck) => {
      this.deck = deck;
    });
  }

  toggleReveal() {
    this.reveal = !this.reveal;
  }

  next() {
    if (this.counter + 1 >= this.deck.cards.length) {
      this.finished = true;
      this.reveal = false;
      return;
    }

    this.counter++;
    this.reveal = false;
  }

  shuffleDeck() {
    this.shuffledDeck.cards = this.deck.cards.slice();
    for (var i = this.shuffledDeck.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.shuffledDeck.cards[i];
      this.shuffledDeck.cards[i] = this.shuffledDeck.cards[j];
      this.shuffledDeck.cards[j] = temp;
    }
    this.shuffleMode = true;
    console.log('deck', this.deck.cards);
    console.log('shuffled deck', this.shuffledDeck.cards);
  }
}
