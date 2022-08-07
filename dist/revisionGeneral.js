"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// variables
const age = 18;
const player = "Leonardo";
const student = true;
// arrays
const arrayNumbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
const arrayStrings = ["carros", "motos", "bicicletas"];
const arrayBoollean = [true, false, false, true];
let arrayTuple;
// tuple
arrayTuple = [arrayNumbers, arrayStrings, arrayBoollean];
// Object literals
const user = {
    name: "Leonardo",
    age: 0
};
const adressPerson1 = {
    city: "United States",
    homeNumber: 123,
};
const adressPerson2 = {
    city: "England",
    homeNumber: 321,
};
function showAdress(adress) {
    return `${adress.city}, ${adress.homeNumber}`;
}
showAdress(adressPerson1);
// any
let any = "";
any = "test";
any = false;
any = [];
// union type
let id = "";
id = "test";
id = 100;
// enum
var modelsCars;
(function (modelsCars) {
    modelsCars["sport"] = "Para estradas";
    modelsCars["sedam"] = "Para cidade";
    modelsCars["picap"] = "Para trabalhos";
})(modelsCars || (modelsCars = {}));
const hb20 = {
    name: "HB20",
    category: modelsCars.sedam,
};
// console.log(hb20);
// literals types
let test;
test = "valueFixed";
test = null;
// functions
function add(a, b) {
    return a + b;
}
let myName = "Leonardo";
function returnOnlyString(name) {
    return "name";
}
returnOnlyString(myName);
function nothing() {
    return;
}
// narrowing - Checagem de tipos
function doSomeThing(info) {
    if (typeof info === "number") {
        return `Parametro é um numero`;
    }
    else {
        return `Parametro é um boolean`;
    }
}
// generics
function genericsArrays(arr) {
    arr.forEach((array) => {
        console.log(array);
    });
}
const arrayOne = [1, 2, 3];
const arrayTwo = ["abc", "def", "ghi"];
genericsArrays(arrayOne);
genericsArrays(arrayTwo);
// POO - Classes -
class Book {
    constructor(title, author, editionYear, available) {
        this.title = title;
        this.author = author;
        this.editionYear = editionYear;
        this.available = available;
    }
    showInfoBook() {
        return `${this.title}, ${this.author}, ${this.editionYear}`;
    }
    verification() {
        if (this.available) {
            return `Available`;
        }
        else {
            return `No Available`;
        }
    }
}
const book1 = new Book("The chronicles of Narnia", "C.S. Lewis", 2005, true);
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    showBrand() {
        console.log(`Brand of the car is ${this.brand}`);
    }
}
const car1 = new Car("Ford");
// exemple of use
// car1.showBrand();
// Heritage
class SuperCar extends Car {
    constructor(brand, numberDoors) {
        super(brand);
        this.numberDoors = numberDoors;
    }
}
const classic = new SuperCar("Chevrolet", 4);
classic.showBrand();
//  decorators - concept advanced, i didin´t uderstend completely
function BaseParametes() {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParametes()
], Person);
const leonardo = new Person("leonardo");
console.log(leonardo);
