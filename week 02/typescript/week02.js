var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//------------DATA TYPES
var num = 3;
console.log(num);
var firstName = "max";
var earthisflat = true;
var decimal = 2.2;
var cookiesInJar = null;
var area51 = undefined;
var lastName = "dfsdfsdf";
//------------ARRAY
var listOfStudents = ["Max", "Chole", "Warren"];
var listOfNums = [1, 2, 3, 4];
//-------------CREATE AN ARRAY OF ANIMALS
var AnimalNames = ["Animal1", "Animal2", "Animal3", "Hunter"];
//-------not so fancy way for loop
/*
for(let itemIndex = 0; itemIndex < AnimalNames.length; itemIndex++){
    let animal = AnimalNames[itemIndex];
    console.log(animal)
} */
//-------------LOOP THROUGH ARRAY AND DISPLAY ANIMAL NAME IN CONSOLE
AnimalNames.forEach(function (element) {
    console.log(element);
});
//-----------CLASSES
var Planet = /** @class */ (function () {
    // private name: string;
    // private mass: number;
    // constructor(name: string, mass: number){
    //     this.name = name;
    //     this.mass = mass;
    // }
    function Planet(name, mass) {
        this.name = name;
        this.mass = mass;
    }
    Planet.prototype.sayHello = function (str) {
        return str + this.name;
    };
    return Planet;
}());
var pl = new Planet("Earth", 345);
console.log(pl.name);
console.log(pl.mass);
console.log(pl.sayHello("Say Hello "));
//----------------------CLASS EXERCISE
var Product = /** @class */ (function () {
    function Product(id, cost) {
        this.id = id;
        this.cost = cost;
    }
    return Product;
}());
var CD = /** @class */ (function (_super) {
    __extends(CD, _super);
    function CD(_id, _cost, genre) {
        var _this = _super.call(this, _id, _cost) || this;
        _this.genre = genre;
        return _this;
    }
    return CD;
}(Product));
//let cd: CD = new CD("1", 10);
var cd = new CD("1", 10, "Country");
console.log(cd);
