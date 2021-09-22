//Interfaces => Creates a new type, describing the property names and value types of an object

//this implementation results in hard to read and potentially repetitive code
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
};

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

//lets use an interface instead
interface Vehicle {
    name: string,
    year: number,
    broken: boolean
};

const printVehicleUsingInterface = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};

//note that oldCivic fits the interface structure so it is a valid argument
printVehicleUsingInterface(oldCivic);

//interface with a function
interface VehicleWithSummary {
    name: string,
    year: number,
    broken: boolean,
    summary(): string 
};

const oldCivicWithSummary = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}\nYear: ${this.year}\nBroken: ${this.broken}`
    }
}

const printVehicleSummary = (vehicle: VehicleWithSummary): void => {
    console.log(vehicle.summary());
}

printVehicleSummary(oldCivicWithSummary);

//Note: TS only checks for the existance of the fields defined in the interface. It does not care
//if there are additional fields in the object 
interface Reportable {
    summary(): string 
};

const printReportable = (item: Reportable): void => {
    console.log(item.summary());
}

printReportable(oldCivicWithSummary);

const beverage = {
    color:'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

//both beverage and oldCivicWithSummary are Reportable types
printReportable(beverage);

//Best Practices: Create functions that take interface types as arguments
//                Objects/Classes implement interfaces to work with functions