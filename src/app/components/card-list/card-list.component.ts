import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {

  @Input() navigateTo: any;
  @Input() items: [];
  @Input() listName: String;
  constructor() { }

  ngOnInit() {}

  generateURL(group: string, deck: string){
    return "/card-decks/card-listing/" + group + "/" + deck;
  }
}
