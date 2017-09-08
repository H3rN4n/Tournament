import { Component, OnInit } from '@angular/core';
import { AnimationsService } from 'angular-animation-lib';

const fadeInAnimation = JSON.parse(AnimationsService.fadeIn());
const slideInRightAnimation = JSON.parse(AnimationsService.slideInRight());

@Component({
  moduleId: module.id.toString(),
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    slideInRightAnimation,
    fadeInAnimation
  ]
})
export class HomeComponent implements OnInit {
  animate = true;
  constructor() {}

  ngOnInit() {
  }

}
