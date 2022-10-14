export interface IStack<T> {
    get head(): T | null;
    get isEmpty(): boolean;
    get isFull(): boolean;
    push(value: T): T;
    pop(): T;
}
