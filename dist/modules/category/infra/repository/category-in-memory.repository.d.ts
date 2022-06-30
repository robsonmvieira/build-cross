import { InMemorySearchableRepository } from "#core/repository/in-memory.repository";
import { CategoryProps, Category } from "#modules/category/entities";
import CategoryRepository from "./i-category.repository";
export declare class CategoryInMemoryRepository extends InMemorySearchableRepository<CategoryProps, Category, any> implements CategoryRepository.ICategoryRepository {
    protected applyFilter(data: Category[], filter: string): Promise<Category[]>;
    findByName(name: string): Promise<Category>;
}
