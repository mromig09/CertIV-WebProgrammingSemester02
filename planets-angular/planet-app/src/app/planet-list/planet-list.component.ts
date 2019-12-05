import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet';


@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  Planets: Planet[];
  Service: PlanetService;

  constructor(service: PlanetService) {
    this.Service = service;
   }

  ngOnInit() {
  }

  onClickSort() {
    this.Service.sortPlanets();
  }

  removePlanetFromList(Planet: Planet) {
    this.Service.deletePlanet(Planet);
  }
}
