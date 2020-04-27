import { Component, OnInit } from '@angular/core';
import { CardDeck } from '../models/card-deck';
import { CardService } from '../card.service';


@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage /*implements OnInit*/ {
  private readonly ALLOWED_DECKS = ['classes', 'factions', 'qualities', 'types', 'races'];

  cardDecks: CardDeck[] = [];
  constructor(private cardService: CardService) {
    this.getCardDecks();
  }

  extractAllowedDecks(cardDecks: CardDeck[]){
    this.ALLOWED_DECKS.forEach((deckName:string) =>{
      this.cardDecks.push({name:deckName, types:cardDecks[deckName]})
    })
  }

  private getCardDecks(){
    this.cardService.getAllCardDecks().subscribe(
      (crdSrvc:CardDeck[]) =>{
        this.extractAllowedDecks(crdSrvc);
      }
    )
  }

}
