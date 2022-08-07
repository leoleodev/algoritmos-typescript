// variables
const age: number = 18;
const player: string = "Leonardo";
const student: boolean = true;

// arrays
const arrayNumbers: number[] = [0,10,20,30,40,50,60,70,80,90];
const arrayStrings: string[] = ["carros", "motos", "bicicletas"];
const arrayBoollean: boolean[] = [true, false, false, true];
let arrayTuple: [number[], string[], boolean[]];

// tuple
arrayTuple = [arrayNumbers, arrayStrings, arrayBoollean];

// Object literals
const user: {name: string, age: number} = {
    name: "Leonardo",
    age: 0
}

// interface
interface Adress {
    city: string,
    homeNumber: number,
}
const adressPerson1 = {
    city: "United States",
    homeNumber: 123,
}
const adressPerson2: Adress = {
    city: "England",
    homeNumber: 321,
}
function showAdress(adress: Adress){
    return `${adress.city}, ${adress.homeNumber}`;
}
showAdress(adressPerson1);

// type
type info = {
    currentJob: string;
    cpf: number;
    deficiency: false;
    adress: {
        cep: number;
        state: string;
    }
}

// any
let any: any = "";

any = "test";
any = false;
any = [];

// union type
let id: string | number = "";

id = "test";
id = 100;

// enum
enum modelsCars {
    sport = "Para estradas",
    sedam = "Para cidade",
    picap = "Para trabalhos"
}

const hb20 = {
    name: "HB20",
    category: modelsCars.sedam,
}
// console.log(hb20);

// literals types
let test: "valueFixed" | null;

test = "valueFixed";
test = null;

// functions
function add(a: number, b: number){
    return a+b;
}

let myName = "Leonardo";

function returnOnlyString(name: string): string{
    return "name";
}

returnOnlyString(myName);

function nothing():void{
    return;
}

// optional arguments
type funcions = {
    functionName: string;
    functionReturn?: boolean;
}

// narrowing - Checagem de tipos
function doSomeThing(info: number | boolean){
    if(typeof info === "number"){
        return `Parametro é um numero`;
    }else{
        return `Parametro é um boolean`;
    }
}

// generics
function genericsArrays<T>(arr: T[]){
    arr.forEach((array)=>{
        console.log(array);
    })
}
const arrayOne = [1,2,3];
const arrayTwo = ["abc", "def", "ghi"];
genericsArrays(arrayOne);
genericsArrays(arrayTwo);

// POO - Classes -
class Book {
    title
    author
    editionYear
    available

    constructor(
            title: string,
            author: string,
            editionYear: number,
            available: boolean
        ){
        this.title = title;
        this.author = author;
        this.editionYear = editionYear;
        this.available = available;
    }
    showInfoBook(){
        return `${this.title}, ${this.author}, ${this.editionYear}`
    }
    verification(){
        if(this.available){
            return `Available`;
        }else{
            return `No Available`;
        }
    }
}

const book1 = new Book("The chronicles of Narnia", "C.S. Lewis", 2005, true);
// exemple of use
// console.log(book1.showInfoBook());
// console.log(book1.verification());

// interface in classes

interface IModelCar {
    brand:string,
    showBrand(): void,
}

class Car implements IModelCar{
    brand
    constructor(brand: string){
        this.brand = brand;
    }
    showBrand(): void {
        console.log(`Brand of the car is ${this.brand}`)
    }
}

const car1 = new Car("Ford");
// exemple of use
// car1.showBrand();

// Heritage
 class SuperCar extends Car {
    numberDoors
    constructor(brand: string, numberDoors: number){
        super(brand)
        this.numberDoors = numberDoors;
    }
 }

 const classic = new SuperCar("Chevrolet", 4);
 classic.showBrand();

//  decorators - concept advanced, i didin´t uderstend completely

function BaseParametes(){
    return <T extends {new (...args: any[]): {}}>(constructor: T)=>{
        return class extends constructor{
            id = Math.random();
            createAt = new Date();
        }
    }
}
@BaseParametes()
class Person{
    name
    constructor(name: string){
        this.name = name;
    }
}
const leonardo = new Person("leonardo");
console.log(leonardo);
