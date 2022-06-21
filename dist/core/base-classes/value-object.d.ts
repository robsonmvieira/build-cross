export declare abstract class ValueObject<T = any> {
    protected readonly _value: T;
    constructor(value: T);
    equals(id?: ValueObject<T>): boolean;
    get value(): T;
    toString(): string;
}
