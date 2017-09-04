import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './../../../../animations';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {

  animate: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
