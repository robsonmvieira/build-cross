export declare class ValidatorRules {
    private value;
    private property;
    private constructor();
    static values(value: any, property: string): ValidatorRules;
    required(): Omit<this, 'required'>;
    string(): Omit<this, 'string'>;
    number(): Omit<this, 'number'>;
    boolean(): Omit<this, 'boolean'>;
    maxLength(max: number): Omit<this, 'maxLength'>;
    minLength(min: number): Omit<this, 'minLength'>;
}
export declare function isEmpty(value: any): boolean;
