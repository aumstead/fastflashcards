import { Deck } from './deck';

export interface User {
  id: string;
  email: string;
  decks: Deck[];
}
