import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  demoCards = [
    // {
    //   front: 'What are the benefits of flash cards?',
    //   back: 'Flash cards are one of the best ways to test yourself and train your brain to actively recall information.',
    // },
    {
      front: 'Why use FastFlashCards.com?',
      back: 'Take your cards with you everywhere! Just open your browser and study.',
    },
    {
      front: 'How do I start making cards?',
      back: "Register with an email and password. That's it!",
    },
    {
      front: 'Why do I have to make an account?',
      back: "That's the only way to save your cards! Your email and data will only be used here to manage your account.",
    },
  ];
  counter: number = 0;
  reveal = false;

  constructor(
    private _titleService: Title,
    private _router: Router,
    private _toastr: ToastrService,
    private _accountService: AccountService
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(`Home | FastFlashCards.com`);
  }

  toggleReveal() {
    this.reveal = !this.reveal;
  }

  next() {
    if (this.counter + 1 >= this.demoCards.length) {
      this.reveal = false;
      this.counter = 0;
      return;
    }

    this.counter++;
    this.reveal = false;
  }

  resetCounter() {
    this.counter = 0;
  }

  demoLogin() {
    this._accountService.demoLogin().subscribe(
      () => {
        this._router.navigateByUrl('/user/decks');
      },
      (error) => {
        this._toastr.error('Error logging into demo.');
      }
    );
  }
}
