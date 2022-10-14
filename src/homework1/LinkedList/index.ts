import { ILinkedList, ILink } from './interface';

class Link<T> implements ILink<T> {
    #prev: ILink<T> | null = null;
    #next: ILink<T> | null = null;

    value: T;

    constructor(value: T) {
        this.value = value;
    }

    get next(): ILink<T> | null {
        return this.#next;
    }

    get prev(): ILink<T> | null {
        return this.#prev;
    }

    setNext(item: ILink<T>): void {
        this.#next = item;
    }

    setPrev(item: ILink<T>): void {
        this.#prev = item;
    }
}

export class LinkedList<T> implements ILinkedList<T> {
    #first: ILink<T> | null = null;
    #last: ILink<T> | null = null;

    constructor(iterable?: Iterable<T>) {
        this.#first = null;
        this.#last = null;

        if (iterable === undefined) return;

        if (typeof iterable[Symbol.iterator] !== 'function') {
            throw Error('У аргумента отсутствует итератор');
        } else {
            for (const item of iterable) {
                this.insertLast(item);
            }
        }
    }

    get first(): ILink<T> | null {
        return this.#first;
    }
    get last(): ILink<T> | null {
        return this.#last;
    }

    get isEmpty(): boolean {
        return this.#first === null;
    }

    insertFirst(value: T): Link<T> {
        const newItem = new Link(value);

        if (this.isEmpty) {
            this.#first = newItem;
            this.#last = newItem;
        } else {
            newItem.setNext(this.#first);
            this.#first.setPrev(newItem);
            this.#first = newItem;
        }

        return newItem;
    }

    insertLast(value: T): Link<T> {
        const newItem = new Link(value);

        if (this.isEmpty) {
            this.#first = newItem;
            this.#last = newItem;
        } else {
            newItem.setPrev(this.#last);
            this.#last.setNext(newItem);
            this.#last = newItem;
        }

        return newItem;
    }

    find(value: T): ILink<T> | undefined {
        for (const item of this) {
            if (item.value === value) {
                return item;
            }
        }
        return undefined;
    }

    deleteFirst(): ILink<T> {
        if (this.isEmpty) {
            throw Error('Список пуст');
        }
        const deletedItem: ILink<T> = this.#first;
        if (this.first.next === null) {
            this.#first = null;
            this.#last = null;
        } else {
            this.#first = this.#first.next;
            this.#first.setPrev(null);
        }
        return deletedItem;
    }
    deleteLast(): ILink<T> {
        if (this.isEmpty) {
            throw Error('Список пуст');
        }
        const deletedItem: ILink<T> = this.#last;
        if (this.last.prev === null) {
            this.#last = null;
            this.#first = null;
        } else {
            this.#last = this.#last.prev;
            this.#last.setNext(null);
        }
        return deletedItem;
    }

    delete(value: T): boolean {
        const findDeletedItem = this.find(value);
        if (findDeletedItem !== undefined) {
            if (findDeletedItem.prev instanceof Link) {
                findDeletedItem.prev.setNext(findDeletedItem.next);
            } else {
                this.#first = findDeletedItem.next;
            }
            if (findDeletedItem.next instanceof Link) {
                findDeletedItem.next.setPrev(findDeletedItem.prev);
            } else {
                this.#last = findDeletedItem.prev;
            }

            return true;
        }
        return false;
    }

    *[Symbol.iterator]() {
        if (this.isEmpty) {
            return;
        }
        let temp = this.#first;
        while (temp.next !== null) {
            yield temp;
            temp = temp.next;
        }
        yield temp;
    }

    reverse(): ILinkedList<T> {
        if (this.isEmpty) return this;

        const reversedList: ILinkedList<T> = new LinkedList();

        for (const el of this) {
            reversedList.insertFirst(el.value);
        }

        return reversedList;
    }
}
