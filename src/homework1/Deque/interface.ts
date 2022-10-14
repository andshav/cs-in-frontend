export interface IDeque<T> {
    get head(): T | null;
    get tail(): T | null;
    get isEmpty(): boolean;
    insertFirst(value: T): T;
    insertLast(value: T): T;
    deleteFirst(): T;
    deleteLast(): T;
}
