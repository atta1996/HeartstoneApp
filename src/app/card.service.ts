import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardDeck } from './models/card-deck';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly HS_API_URL='https://omgvamp-hearthstone-v1.p.rapidapi.com/';
  private readonly API_KEY='a6ecdea122msh0c7e6bf91a6f444p150f2djsn833625d5761b';

  private headers: HttpHeaders = new HttpHeaders({
    'x-rapidapi-key': this.API_KEY
  })

  constructor(private http: HttpClient) { }


  public getAllCardDecks(): Observable<CardDeck[]> {
    return this.http.get<CardDeck[]>(
      this.HS_API_URL+'info', {headers: this.headers}
    );
  }
}
