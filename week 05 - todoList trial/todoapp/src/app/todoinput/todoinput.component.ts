import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.css']
})
export class TodoinputComponent implements OnInit {

  @Output()
  newItemEvent = new EventEmitter<todo>();


  constructor() { }

  ngOnInit() {
  }
  
  
  onButtonClick() {
    this.newItemEvent.emit(new todo("Blank Todo Item Here", false));
  }

}
