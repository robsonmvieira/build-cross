import { SearchParams } from "#core/repository/base.repository";
import { Category } from "#modules/category/entities";
import { CategorySequelizeModel } from "../../models";
import CategoryRepository from "../i-category.repository";
export declare namespace CategorySequelizeRepository {
    class Repository implements CategoryRepository.ICategoryRepository {
        private categoryModel;
        searchableFields: string[];
        constructor(categoryModel: typeof CategorySequelizeModel);
        create(data: Category): Promise<void>;
        update(data: Category): Promise<void>;
        delete(id: string): Promise<void>;
        findById(id: string): Promise<Category>;
        findAll(): Promise<Category[]>;
        protected applyFilter(data: Category[], filter: string): Promise<Category[]>;
        search(props: SearchParams): Promise<CategoryRepository.SearchResult>;
        private get;
        private toCategory;
    }
}
export default CategorySequelizeRepository;
