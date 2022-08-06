"use strict";
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
