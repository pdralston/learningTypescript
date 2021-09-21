//Types give the Typescript (TS) compiler information to analyze our code for errors

const today = new Date();
//because TS knows today's type (date) it knows and can suggest methods and fields to access
today.getMonth();

const person = {
    age: 20
};

//TS implicitly recognizes the fields/methods of the object assigned to person
//and will show appropriate errors as a result

class Color {

}

const red = new Color();
//TS knows that red is an object of type Color

//-----Annotation and Inference examples-----//
let apples: number = 5;
//':' followed by a type is a type annotation that tells TS that apples is always going to be a number
//attempting to assign something that is not a number will give an error;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {

}
let car: Car = new Car();

//Object Literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
}
//note the ; is the field seperator in object literal type annotation

//Functions
const logNumber: (i: number) => void = (i) => {
    console.log(i);
};

//Note that the above annotations are not neccesary since TS can infer the types of the variables based on their init
//If the type cannot be inferred then TS will infer the type to 'any'
//Rely on inference as much as possible
//Annotation should be used:

//    When we declare a variable on one line and init on another
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

//    When we want a variable to have a type that cannot be inferred
let numbers = [-10, -1, 12];
//say we want numberAboveZero to be either a number or a boolean
let numberAboveZero: number | boolean = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}

//    When a function returns the 'any' type and we need to clarify the value
const json = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}
//Note that JSON.parse returns the any type
//TS cannot check property references of the 'any' type
//avoid 'any' type at all costs

//lets fix the above
const fixed_coordinates : {x:number; y:number} = JSON.parse(json);
console.log(fixed_coordinates);
//now TS knows that fixed_coordinates only has properties x and y
