import { Component, OnInit } from '@angular/core';
import { Articolo } from '../articolo';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css'],
})
export class ArticoloComponent implements OnInit {
  articlo: Articolo;
  constructor() {}

  ngOnInit() {}
}
