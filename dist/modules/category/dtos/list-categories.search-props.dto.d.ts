import { SortDirection } from "../../../core/repository/base.repository";
export declare type ListCategoriesInputProps = {
    page: number;
    per_page: number;
    sort: string;
    sort_dir: SortDirection;
    filter: string | null;
};
