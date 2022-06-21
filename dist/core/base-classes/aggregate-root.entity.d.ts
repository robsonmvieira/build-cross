import { Entity } from "./entity.base";
export declare abstract class AggregateRoot<T = any> extends Entity<T> {
    get id(): string;
}
