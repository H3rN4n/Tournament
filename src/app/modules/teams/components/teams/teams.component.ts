import { Component, OnInit } from '@angular/core';
import { AnimationsService } from 'angular-animation-lib';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  animations: [
    // AnimationsService.slideOutRightAnimation,
  ]
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
