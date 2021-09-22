//annotation can be left off here, to use inference
const carMakers = ['ford', 'toyota', 'chevy'];

//type annotation should be used if init to empty array
const strArr: string[] = [];

//array of objects
const dates = [new Date(), new Date()];

//2D arrays => carsByMake: string[][]
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//Why typing arrays is useful:
//  TS can do type inference when extracting values from an array
const ford = carMakers[0]; //ford inferenced to be a string type
const myCar = carMakers.pop(); //myCar inferenced to be a string type

//  TS can prevent adding incompatible values to the array
//carMakers.push(100); this results in an error

//  We can get help with 'map', 'forEach', 'reduce' functions
carMakers.map((car: string): string => {
    return car;//this gives us access to all of the public string methods
});

//  Flexible - arrays can still contain multiple different types
const flexArray: (string | number)[] = [];
flexArray.push(100);
flexArray.push("100");
