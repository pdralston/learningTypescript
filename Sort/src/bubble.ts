import { Collection } from './collection'

export class Bubble {
    constructor (private data: Collection) {}
    public sort(): void {
        let swapped: boolean;
        do {
            swapped = false;
            for (let i = 0, j = 1; j < this.data.length; ++i, ++j){
                if (this.data.compare(i, j)) {
                    swapped = true;
                    this.data.swap(i, j)
                }
            }
        } while (swapped === true);
    }
}