/**
 * The interface to compare between objects
 */
export interface IComparable<T> {
    hashcode(): number;
    equals(obj: T): boolean;
    compareTo(obj: T): number;
}