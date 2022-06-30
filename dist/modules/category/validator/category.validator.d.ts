import { ClassValidator } from "#core/validators/class-validator";
import { CategoryProps } from "#modules/category/entities";
export declare class CategoryModelRules {
    name: string;
    description: string;
    isActive: boolean;
    constructor(data: CategoryProps);
}
export declare class CategoryValidator extends ClassValidator<CategoryModelRules> {
    validate(data: CategoryProps): boolean;
}
export declare class CategoryValidatorFactory {
    static create(): CategoryValidator;
}
