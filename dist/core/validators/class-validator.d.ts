import { FieldsErrors, IValidatorFields } from "./validatior-fields.contract";
export declare abstract class ClassValidator<T> implements IValidatorFields<T> {
    errors: FieldsErrors;
    validatedData: any;
    validate(data: any): boolean;
}
