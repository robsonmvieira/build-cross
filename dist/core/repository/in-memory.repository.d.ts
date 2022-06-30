import { Entity } from "../base-classes/entity.base";
import { IRepository, ISearchableRepository, SearchResult as SR, SearchParams as SP } from "./base.repository";
export declare abstract class InMemoryRepository<Props, T extends Entity<Props>> implements IRepository<Props, T> {
    data: T[];
    update(data: T): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<T>;
    findAll(): Promise<T[]>;
    create(data: T): Promise<void>;
    protected get(id: string): Promise<T>;
}
export declare abstract class InMemorySearchableRepository<Props, T extends Entity<Props>, SearchParams> extends InMemoryRepository<Props, T> implements ISearchableRepository<Props, T, SearchParams> {
    searchableFields: string[];
    search(props: SP): Promise<SR<Props, T>>;
    protected abstract applyFilter(data: T[], filter: string | null): Promise<T[]>;
    protected applySort(data: T[], sort: string | null, sort_dir: string | null): Promise<T[]>;
    protected applyPaginate(data: T[], page: SP['page'], per_page: SP['per_page']): Promise<T[]>;
}
