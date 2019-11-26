import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { Observable, of } from 'rxjs';
//import { PLANETS } from './'

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private messageService: MessageService) { }

  getPlanets(): Observable<Planet[]> {
    this.messageService.add('PlanetService: fetched planets');
    return of(planet);
  }

  getPlanet(name: string): Observable<Planet> {
    this.messageService.add('PlanetService: fetched planet name=${name}');
    return of(planet.find(planet => planet.name == name));
  }
}
