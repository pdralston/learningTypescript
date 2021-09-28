export abstract class Bubble {
    abstract length: number;
    abstract compare(left: number, right: number): boolean;
    abstract swap(left: number, right: number): void;
    
    public sort(): void {
        let swapped: boolean;
        do {
            swapped = false;
            for (let i = 0, j = 1; j < this.length; ++i, ++j){
                if (this.compare(i, j)) {
                    swapped = true;
                    this.swap(i, j)
                }
            }
        } while (swapped === true);
    }
}