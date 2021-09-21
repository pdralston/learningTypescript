//Type annotations for functions:
//    code we add to tell TS the types of the arguments and the return value
//Type inference for functions
//    TS will attempt to infer the return type of our function

const add = (a: number, b: number): number => {
    return a + b;
};

//Note that we do not use type inference for the returns, below is why

const sub = (a: number, b: number) => {
    a - b;
};
//This does not give us an error, but our intent was probably to return the result

function divide(a: number, b: number): number {
    if (b === 0) {
        console.log("Error: Divide by 0");
        return NaN;
    }
    return a / b;
};

const multiply = function(a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

//only use never if the function truly never returns including void
const throwError = (message: string): never => {
    throw new Error(message);
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);