import faker from 'faker';

import { Locatable } from './Map' ;

faker.seed(new Date().getTime());

export class User implements Locatable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName() + " " + faker.name.lastName();
        this.location = {
            lat: parseFloat(faker.address.latitude()), 
            lng: parseFloat(faker.address.longitude())
        };
    }
    
    markerContent(): string {
        return `<h3>Name: ${this.name}</h3>`
    }
}