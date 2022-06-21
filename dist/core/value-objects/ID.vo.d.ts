import { ValueObject } from '../base-classes/value-object';
export declare class UniqueID extends ValueObject<string> {
    constructor(id?: string);
    validate(): boolean;
}
