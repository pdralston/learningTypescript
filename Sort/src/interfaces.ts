import { Collection } from './collection'

export interface Sorter {
    sort(): void;
}

export interface Sortable {
    length: number;
    compare(arg0: number, arg1: number): boolean;
    swap(arg1: number, number2: number): void;
}