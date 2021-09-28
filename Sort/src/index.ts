import { Bubble } from './bubble'
import { NumbersCollection, CharCollection,StringCollection } from './collection';

var numbers = new NumbersCollection([2, 3, 1, -15, 42, -100]);
var stringC = new CharCollection("Thisshouldalsogetsorted");
var stringA = new StringCollection(['hello','darkness','My','oLd', 'fRiend']);
console.log(numbers.data);
numbers.sort();
console.log(numbers.data);
console.log(stringA.data);
stringA.sort();
console.log(stringA.data);
console.log(stringC.data);
stringC.sort();
console.log(stringC.data);