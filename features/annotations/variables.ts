/* Type Annotations
 *  - Primitives
 */
let apples: number = 5;
let speed: string = 'slow';
let hasName: boolean = true;

// - What is a value? What is a type?
let nothingMuch: null = null;
let nothing: undefined = undefined;

// - Built in objects
let now: Date = new Date();

// - Array
let colors: string[] = ['red', 'green', 'blue'];
let prices: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// - Classes
class Car {}
let car: Car = new Car();

// - Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};

// - Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

/* Type Inferences
 *  - Primitives
 */
let apples2 = 5;
let speed2 = 'slow';
let hasName2 = true;

// - What is a value? What is a type?
let nothingMuch2 = null;
let nothing2 = undefined;

// - Built in objects
let now2 = new Date();

// - Array
let colors2 = ['red', 'green', 'blue'];
let prices2 = [1, 2, 3];
let truths2 = [true, true, false];

// - Classes
class Car2 {}
let car2 = new Car2();

// - Object literal
let point2 = {
  x: 10,
  y: 20
};

// - Function
const logNumber2 = (i) => {
  console.log(i);
};

/*
 * When to use annotations
 * 1) Function that returns the 'any' type
 */

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

/*
 * 2) When we declare a variable on on line
 * and initializate it later
 */

let words = ['red', 'green', 'blue'];
let foundWord: boolean; // = false is better.

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

/*
 * 3) Variable whose type cannot be inferred correctly
 */

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
