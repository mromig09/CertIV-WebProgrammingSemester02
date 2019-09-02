import { Component } from '@angular/core';
import { todo } from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: todo[] = [];

  constructor(){
    this.todo.push(new todo("Complete this task", false));
    this.todo.push(new todo("Add support for adding todos", false));
  }

  addTodo(todo: Todo){
    this.todo.push
  }

  title = 'todoapp';
}
