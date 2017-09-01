import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { _Player } from '../../models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  @Input()
  teamNumber: number;

  @Input()
  player: _Player;

  @Output()
  deleteItem: EventEmitter<Event> = new EventEmitter<Event>();

  ngOnInit() {

  }

  delete(id){
    this.deleteItem.emit(id);
  }
  

}
