export interface ILink<T> {
    value: T;
    get next(): ILink<T> | null;
    get prev(): ILink<T> | null;
    setNext(item: ILink<T>): void;
    setPrev(item: ILink<T>): void;
}

export interface ILinkedList<T> {
    get first(): ILink<T> | null;
    get last(): ILink<T> | null;
    get isEmpty(): boolean;
    insertFirst(value: T): ILink<T>;
    insertLast(value: T): ILink<T>;
    deleteFirst(): ILink<T>;
    deleteLast(): ILink<T>;
    delete(value: T): boolean;
    find(value: T): ILink<T> | undefined;
    reverse(): ILinkedList<T>;
}
