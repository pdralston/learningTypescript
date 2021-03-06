import { Bubble } from "./bubble"

export abstract class ArrayCollection extends Bubble {
    data: any[] =[];

    get length(): number {
        return this.data.length;
    }

    abstract compare(left: number, right: number): boolean;
    
    swap(left: number, right: number): void {
        let leftVal = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = leftVal;
    }
}

export class NumbersCollection extends ArrayCollection {
    constructor (public data: number[]) { 
        super (); 
    }

    compare (left: number, right:number): boolean {
        return this.data[left] > this.data[right];
    }
}

export class CharCollection extends Bubble {
    constructor (public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare (left: number, right:number): boolean {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase();
    }

    swap(left: number, right: number): void {
        this.data = this.data.substr(0, left) + 
                    this.data[right] + 
                    this.data[left] + 
                    this.data.substr(right + 1);
    }
}

export class StringCollection extends ArrayCollection {
    constructor (public data: string[]) {
        super();
    }

    compare (left: number, right:number): boolean {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase();
    }
}