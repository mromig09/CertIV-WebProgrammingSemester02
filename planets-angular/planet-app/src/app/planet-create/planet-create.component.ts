import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-create',
  templateUrl: './planet-create.component.html',
  styleUrls: ['./planet-create.component.css']
})
export class PlanetCreateComponent implements OnInit {
  newName: string;
  newMoons: number;
  newDistance: number;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
  }

  onClickNew(){
    this.planetService.addPlanet(new Planet(this.newName, this.newMoons, this.newDistance))
  }
}
