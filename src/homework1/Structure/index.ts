import { getIndexByKeyType, IStructure, KeyType } from './interface';

export class Structure<T> implements IStructure<T> {
    #structure: T[];

    #getIndexByKey: getIndexByKeyType;

    constructor(arrayOfKeys: string[]) {
        if (!Array.isArray(arrayOfKeys) || arrayOfKeys.length === 0) {
            throw Error('Необходимо передать массив ключей');
        }

        if (typeof arrayOfKeys[Symbol.iterator] !== 'function') {
            throw Error('У аргумента отсутствует итератор');
        }

        this.#structure = new Array<T>(arrayOfKeys.length);

        this.#getIndexByKey = <getIndexByKeyType>(
            new Function('key', Structure.initMapKeyToIndexFunctionBody(arrayOfKeys))
        );
    }

    get(key: KeyType): T {
        return this.#structure[this.#getIndexByKey(key)];
    }

    set(key: KeyType, value: T): void {
        this.#structure[this.#getIndexByKey(key)] = value;
    }

    static initMapKeyToIndexFunctionBody(keyList: KeyType[]): string {
        const createCases: string = keyList.map((key, index) => `case('${key}'): return ${index};`).join('');
        return `
            switch(key) {
                ${createCases}
                default: 
                    throw Error('Ключ не найден')
            }
        `;
    }
}
