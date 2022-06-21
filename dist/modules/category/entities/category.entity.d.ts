import { CategoryProps } from ".";
import { AggregateRoot } from "../../../core/base-classes/aggregate-root.entity";
import { Result } from "../../../core/base-classes/result";
import { UniqueID } from "../../../core/value-objects/ID.vo";
export declare class Category extends AggregateRoot<CategoryProps> {
    readonly props: CategoryProps;
    private constructor();
    static create(data: CategoryProps, id?: UniqueID): Result<Category>;
    static validate(data: CategoryProps): void;
    updateName(name: string): void;
    activate(): void;
    deactivate(): void;
    get name(): string;
    get description(): string | undefined;
    get is_active(): boolean;
    get created_at(): Date;
}
