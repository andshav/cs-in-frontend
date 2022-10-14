export interface IQueue<T> {
    get head(): T | null;
    get isEmpty(): boolean;
    push(value: T): T;
    pop(): T;
}
