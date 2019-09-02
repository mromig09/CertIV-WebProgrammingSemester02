import { Component, OnInit, Input } from '@angular/core';
import { todo } from '../todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input()
  item: todo;
  
  constructor() { }

  ngOnInit() {
  }

}
