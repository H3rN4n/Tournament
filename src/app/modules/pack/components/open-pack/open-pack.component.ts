import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from './../../../../animations/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-open-pack',
  templateUrl: './open-pack.component.html',
  styleUrls: ['./open-pack.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class OpenPackComponent implements OnInit {

  public isOpening: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log('Open Pack');
  }

  openPack(){
    this.isOpening = true;
  }

  closePack(){
    this.isOpening = false;
  }

}
