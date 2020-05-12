import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Card} from '../models/card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {

  cardDeckGroup: string;
  cardDeck: string;

  public cards: Card[] = [];

  ionViewWillEnter(){
    this.cardDeckGroup = this.ruta.snapshot.params['cardDeckGroup'];
    this.cardDeck = this.ruta.snapshot.params['cardDeck'];

    this.cardService.getCardByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
      (cards: Card[]) => {
        this.cards = cards;
      }
    );
  }

  constructor(private ruta: ActivatedRoute, private cardService: CardService) {
    
  }

}
