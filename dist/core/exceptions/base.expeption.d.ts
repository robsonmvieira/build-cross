import { Exceptions } from './exception.types';
export interface SerializedException {
    name: string;
    message: string;
    stack?: string;
}
export declare abstract class ExceptionBase extends Error {
    readonly message: string;
    readonly metadata?: any;
    constructor(message: string, metadata?: any);
    abstract name: Exceptions;
    toJSON(): SerializedException;
}
