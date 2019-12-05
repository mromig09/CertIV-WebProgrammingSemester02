import { Injectable } from '@angular/core';
import { Planet } from './planet';
//import { Observable, of } from 'rxjs';
//import { PLANETS } from './'

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  PLANETS: Planet[] = [];

    constructor() { }

    addPlanet(planet: Planet) {
      this.PLANETS.push(planet);
    }

    sortPlanets() {
      this.PLANETS = this.PLANETS.sort(function(a, b) {
          var planet1 = a.distanceFromSun;
          var planet2 = b.distanceFromSun;

          return planet1 - planet2
      });
    }

    deletePlanet(Planet: Planet) {
      const index: number = this.PLANETS.indexOf(Planet);
      if (index !== -1) {
        this.PLANETS.splice(index, 1)
      }
    }
  /*constructor(private messageService: MessageService) { }

  getPlanets(): Observable<Planet[]> {
    this.messageService.add('PlanetService: fetched planets');
    return of(planet);
  }

  getPlanet(name: string): Observable<Planet> {
    this.messageService.add('PlanetService: fetched planet name=${name}');
    return of(planet.find(planet => planet.name == name));
  }*/
}
