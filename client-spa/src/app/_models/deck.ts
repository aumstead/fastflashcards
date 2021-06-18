import { Card } from './card';

export interface Deck {
  id: number;
  name: string;
  appUserId: string;
  cards: Card[];
}
