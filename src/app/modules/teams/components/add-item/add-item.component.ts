import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  name: string = '';

  @Output()
  addPlayer: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  teamNumber: number;

  ngOnInit() {

  }

  add(){
    this.addPlayer.emit({name: this.name, teamNumber: this.teamNumber});
  }

  constructor() { }

}
