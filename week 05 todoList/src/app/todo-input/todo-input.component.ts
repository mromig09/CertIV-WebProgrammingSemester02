import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Output() 
  newItemEvent = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.newItemEvent.emit(new Todo("Blank Todo Item Here", false));
  }

}
