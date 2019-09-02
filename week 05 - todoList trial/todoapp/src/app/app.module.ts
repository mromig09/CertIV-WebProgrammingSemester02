import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoinputComponent } from './todoinput/todoinput.component';
import { TodoitemComponent } from './todoitem/todoitem.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoinputComponent,
    TodoitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
