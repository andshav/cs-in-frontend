import { IQueue } from './interface';
import { ILinkedList } from '../LinkedList/interface';
import { LinkedList } from '../LinkedList';

export class Queue<T> implements IQueue<T> {
    #list: ILinkedList<T>;
    constructor(iterable?: Iterable<T>) {
        this.#list = new LinkedList(iterable);
    }
    pop(): T {
        if (this.isEmpty) {
            throw Error('Очередь пуста');
        }
        return this.#list.deleteLast().value;
    }
    push(value: T): T {
        return this.#list.insertFirst(value).value;
    }
    get head(): T {
        return this.#list.first.value;
    }
    get isEmpty(): boolean {
        return this.#list.isEmpty;
    }
}
