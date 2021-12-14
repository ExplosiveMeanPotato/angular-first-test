import { Component } from '@angular/core';
import { Articolo } from './articolo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular first test';
  articolo: Articolo;

  constructor() {
    this.articolo = new Articolo(
      'Bella raga',
      'Anonymous',
      'Questo è un testo molto lungo che inizia con Lorem Ipsum Dolor Sit Amet blah blah blah'
    );
  }
}
