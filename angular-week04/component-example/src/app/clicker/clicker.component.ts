import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {

  @Input() startCount: number;
  count: number = 0;

  constructor() { }

  ngOnInit() {
    this.count = this.startCount;
  }

  // onMinusButtonClick(){
  //   this.count--;
  // }
  
  onAddButtonClick(amount){
    this.count = this.count + amount;
    //this.count = this.count +1;
    //this.count += 1;
  }
}
