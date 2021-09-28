import { Bubble } from './bubble'
import { NumbersCollection, CharCollection,StringCollection } from './collection';

var numbers = new NumbersCollection([2, 3, 1, -15, 42, -100]);
var stringC = new CharCollection("Thisshouldalsogetsorted");
var stringA = new StringCollection(['hello','darkness','My','oLd', 'fRiend']);
var sorted = new Bubble(numbers);
var sorted2 = new Bubble(stringA);
var sorted3 = new Bubble(stringC);
console.log(numbers.data);
sorted.sort();
console.log(numbers.data);
console.log(stringA.data);
sorted2.sort();
console.log(stringA.data);
console.log(stringC.data);
sorted3.sort();
console.log(stringC.data);