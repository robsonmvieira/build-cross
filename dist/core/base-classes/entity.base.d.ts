import { UniqueID } from "../value-objects/ID.vo";
import { BaseDomainEntity } from "./base-entity";
export declare abstract class Entity<T extends BaseDomainEntity> {
    protected props: T;
    protected readonly _id: UniqueID;
    protected readonly _props: T;
    constructor(props: T, id?: UniqueID);
    get createdAt(): Date;
    get updatedAt(): Date;
    get isDeleted(): boolean;
    get isBlocked(): boolean;
    equals(object?: Entity<T>): boolean;
    get id(): string;
    toJSON(): Required<{
        id: string;
    } & T>;
    get value(): T;
}
