import faker from 'faker';
import { User } from './User'

export class Company extends User {
    catchPhrase: string;

    constructor() {
        super();
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
    }

    markerContent(): string {
        return super.markerContent() + `<div>Catchphrase: ${this.catchPhrase}</div>`;
    }
}