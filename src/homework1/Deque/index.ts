import { ILinkedList } from '../LinkedList/interface';
import { LinkedList } from '../LinkedList';
import { IDeque } from './interface';

export class Deque<T> implements IDeque<T> {
    #list: ILinkedList<T>;
    constructor(iterable?: Iterable<T>) {
        this.#list = new LinkedList(iterable);
    }

    get head(): T {
        return this.#list.first.value;
    }
    get tail(): T {
        return this.#list.last.value;
    }
    get isEmpty(): boolean {
        return this.#list.isEmpty;
    }

    insertFirst(value: T): T {
        return this.#list.insertFirst(value).value;
    }
    insertLast(value: T): T {
        return this.#list.insertLast(value).value;
    }

    deleteFirst(): T {
        if (this.isEmpty) {
            throw Error('Очередь пуста');
        }
        return this.#list.deleteFirst().value;
    }
    deleteLast(): T {
        if (this.isEmpty) {
            throw Error('Очередь пуста');
        }
        return this.#list.deleteLast().value;
    }
}
