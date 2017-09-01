import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Team Picker';
  bg = '';

  constructor(){

  }

  ngOnInit(){
    this.bg = "bg bg-"+ Math.floor((Math.random() * 2) + 1);
  }
}
