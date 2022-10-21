import { isPromise } from "util/types";

let age: number = 3;

let firstName: string = "John";

let isMarried: boolean = false;

let noValue: null = null;

let notAssigned: undefined = undefined;

let today: Date = new Date();

//********** *//
//* arrays
let planet: string[] = ["earth", "mars", "jupiter"];
let luckyNumbers: number[] = [3, 4, 5, 6];
let completed: boolean[] = [false, true, false];

//* Classes
class Phone {}

let phone: Phone = new Phone();

//* object literals
let product: { name: string; price: number } = {
  name: "pen",
  price: 15,
};

//* functions
const printer: (content: string) => void = (content) => {
  console.log(content);
};

//* functions that return 'any' type
const place = '{"lat":45, "lon": -70}';
const newLocation: { lat: number; lon: number } = JSON.parse(place);

//* when we declare a variable and initialize later
const forecast = ["sunny", "rain", "wind", "cloudy"];
let isSunny: boolean;

for (let i = 0; i < forecast.length; i++) {
  if (forecast[i] === "sunny") {
    isSunny = true;
  }
}

//* type cant be inferred correctly
let temperatures = [8, 5, -2];
let subzero: boolean | number = false;
for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] < 0) {
    subzero = temperatures[i];
  }
}
