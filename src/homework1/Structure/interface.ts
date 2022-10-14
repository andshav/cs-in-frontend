export type KeyType = string | number;

export type getIndexByKeyType = (key: KeyType) => number;

export interface IStructure<T> {
    get(key: string): T;
    set(key: string, value: T): void;
}
