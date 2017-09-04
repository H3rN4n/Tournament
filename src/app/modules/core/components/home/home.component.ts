import { Component, OnInit } from '@angular/core';
import { slideInAnimation, fadeInAnimation } from './../../../../animations';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInAnimation, fadeInAnimation]
})
export class HomeComponent implements OnInit {

  animate: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
