import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { _Player } from './../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  players: _Player[];

  @Input()
  teamNumber: number;

  @Output()
  deletePlayer: EventEmitter<Event> = new EventEmitter<Event>();

  ngOnInit() {

  }

  delete(id){
    this.deletePlayer.emit(id);
  }

  constructor() { }


}
