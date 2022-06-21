import { Entity } from "../base-classes/entity.base";
export interface IRepository<Props, T extends Entity<Props>> {
    create(data: T): Promise<void>;
    update(data: T): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<T>;
    findAll(): Promise<T[]>;
}
export declare type SortDirection = "asc" | "desc";
export declare class SearchProps<Filter = string> {
    page?: number;
    per_page?: number;
    sort?: string;
    sort_dir?: SortDirection;
    filter?: Filter;
}
export declare class SearchParams {
    protected _page: number;
    protected _per_page: number;
    protected _sort: string | null;
    protected _sort_dir: SortDirection | null;
    protected _filter: string | null;
    constructor(props?: SearchProps);
    get page(): number;
    get per_page(): number;
    get sort(): string | null;
    get sort_dir(): SortDirection | null;
    get filter(): string | null;
    private set page(value);
    private set per_page(value);
    private set sort(value);
    private set sort_dir(value);
    private set filter(value);
}
export declare type SearchResultProps<Props, E extends Entity<Props>, Filter> = {
    items: E[];
    total: number;
    current_page: number;
    per_page: number;
    sort: string | null;
    sort_dir: SortDirection | null;
    filter: Filter;
};
export declare class SearchResult<Props, E extends Entity<Props>, Filter = string> {
    readonly items: E[];
    readonly total: number;
    readonly current_page: number;
    readonly per_page: number;
    readonly last_page: number;
    readonly sort: string | null;
    readonly sort_dir: SortDirection | null;
    readonly filter: Filter | null;
    constructor(props: SearchResultProps<Props, E, Filter>);
    toJSON(): {
        items: E[];
        total: number;
        current_page: number;
        per_page: number;
        last_page: number;
        sort: string;
        sort_dir: SortDirection;
        filter: Filter;
    };
}
export interface ISearchableRepository<Props, T extends Entity<Props>, SearchInput = SearchParams, SearchOutput = SearchResult<Props, T>> extends IRepository<Props, T> {
    searchbableFields: string[];
    search(props: SearchParams): Promise<SearchOutput>;
}
