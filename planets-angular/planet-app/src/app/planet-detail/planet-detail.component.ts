import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  @Input() Planet: Planet;
  @Output() planetDelete : EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClickDelete() {
    this.planetDelete.emit();
  }

  /*onClickEdit() {
    this.planetDelete.emit();
  } */
}
