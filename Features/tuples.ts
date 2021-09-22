//object representation
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

//type alias, use to abstract a specific structure for reuse
type Drink = [string, boolean, number]

//we place an annotation to convert this from a simple array to tuple
const pepsi: Drink = ['brown', true, 40];
//this ensures that the order of the types of things in the array are maintained

//issue with tuples, what do the numbers in the below tuple mean?
const carSpecs: [number, number] = [400, 3354];

//object format removes the obscurity
const carStats = {
    horsepower: 400,
    weight: 3354
};
//there will be some applications using tuples, but we usually prefer objects instead