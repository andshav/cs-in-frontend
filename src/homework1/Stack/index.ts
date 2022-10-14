import { IStack } from './interface';

export class Stack<T> implements IStack<T> {
    #stack: T[];
    #stackCursor: number;

    constructor(arrayCapacity) {
        if (typeof arrayCapacity === 'number' && arrayCapacity > 0) {
            this.#stack = new Array<T>(arrayCapacity);
            this.#stackCursor = -1;
        } else {
            throw Error('Неккоректное значение максимального размера');
        }
    }

    get head(): T | null {
        if (this.isEmpty) {
            return null;
        }

        return this.#stack[this.#stackCursor];
    }

    get isEmpty(): boolean {
        return this.#stackCursor === -1;
    }

    get isFull(): boolean {
        return this.#stackCursor === this.#stack.length;
    }

    push(value: T): T {
        if (this.isFull) {
            throw Error('Превышен максимальный размер стека');
        }

        this.#stack[++this.#stackCursor] = value;

        return value;
    }

    pop(): T {
        if (this.isEmpty) {
            throw Error('Стек пуст');
        }

        return this.#stack[this.#stackCursor--];
    }
}
