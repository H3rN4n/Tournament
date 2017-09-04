import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from './../../../../animations/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
