import { Component, OnInit } from '@angular/core';
import { todo } from '../todo';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  @Input()
  todo: todo[];

  constructor() { }

  ngOnInit() {
  }

}
