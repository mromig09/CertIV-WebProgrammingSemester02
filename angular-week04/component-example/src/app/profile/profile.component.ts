import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //@Input() item: string;
  name = 'Mark Romig';
  theirName = 'Mark Romig';

  onKeyUp(input: string){
    this.theirName = input;
  }

  constructor() { }

  ngOnInit() {
  }

}
