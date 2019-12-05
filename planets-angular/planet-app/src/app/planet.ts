export class Planet {
    name: string;
    moons: number;
    distanceFromSun: number;

    constructor(planetName: string, planetMoons: number, planetDistanceFromSun: number)
    {
        this.name = planetName;
        this.moons = planetMoons;
        this.distanceFromSun = planetDistanceFromSun;
    }

}

