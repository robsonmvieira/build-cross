export declare class Result<T> {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    error: T | string;
    private _value;
    constructor(isSuccess: boolean, error?: T | string | null, value?: T);
    getResult(): T;
    errorValue(): T;
    static ok<U>(value?: U): Result<U>;
    static fail<U>(error: string): Result<U>;
    static combine(results: Result<any>[]): Result<any>;
}
