import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-array-example',
  templateUrl: './array-example.component.html',
  styleUrls: ['./array-example.component.css']
})
export class ArrayExampleComponent implements OnInit {

  names: string[] = ["Ryan", " Jerome", " Chris", " Martin"]
  //planets: string[] = ["Earth", "Pluto", "Mars"]
  constructor() { }

  ngOnInit() {
  }

  onButtonClick(){
    //this.planets.push("Earth");
    this.names.push("Mark");
  }

}
