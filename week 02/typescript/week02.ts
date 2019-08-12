//------------DATA TYPES
let num = 3;
console.log(num)

let firstName: string ="max";

let earthisflat: boolean = true;
let decimal: number = 2.2;

let cookiesInJar: null = null;
let area51: undefined = undefined;

let lastName = "dfsdfsdf";

//------------ARRAY
let listOfStudents: string[] = ["Max", "Chole", "Warren"];
let listOfNums: Array<number> = [1,2,3,4];

//-------------CREATE AN ARRAY OF ANIMALS
let AnimalNames: string[] = ["Animal1", "Animal2", "Animal3", "Hunter"]

//-------not so fancy way for loop
/*
for(let itemIndex = 0; itemIndex < AnimalNames.length; itemIndex++){
    let animal = AnimalNames[itemIndex];
    console.log(animal)
} */

//-------------LOOP THROUGH ARRAY AND DISPLAY ANIMAL NAME IN CONSOLE
AnimalNames.forEach(element => {
    console.log(element)
});

//-----------CLASSES
class Planet {
    // private name: string;
    // private mass: number;

    // constructor(name: string, mass: number){
    //     this.name = name;
    //     this.mass = mass;
    // }
    constructor(public name: string, public mass: number){
    }

    sayHello(str: string): string{
        return str + this.name;
    }
}

let pl: Planet = new Planet("Earth", 345);

console.log(pl.name);
console.log(pl.mass);
console.log(pl.sayHello("Say Hello "));

//----------------------CLASS EXERCISE
class Product {
    public id: string;
    public cost: number;

    constructor(id: string, cost: number){
        this.id = id;
        this.cost = cost;
    }
}

class Book extends Product{
    public genre: string;
    public title: string;
    constructor(_id: string, _cost: number, genre: string, title: string){
        super(_id, _cost);
        this.genre = genre;
        this.title = title;
    }
}

class CD extends Product{
    public genre: string;
    constructor(_id: string, _cost: number, genre: string){
        super(_id, _cost);
        this.genre = genre;
    }
}

let book: Book = new Book("102", 30, "Science Fiction", "Plan 9 From Outer Space");

//let cd: CD = new CD("1", 10);
let cd: CD = new CD("1", 10, "Country");
console.log(cd);