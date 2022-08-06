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

