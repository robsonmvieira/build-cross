import { Category, CategoryProps } from "../../entities";
import { ISearchableRepository, SearchParams as SearchParamsDefault, SearchResult as SearchResultDefault } from '../../../../core/repository/base.repository';
export declare namespace CategoryRepository {
    class SearchParams extends SearchParamsDefault {
    }
    class SearchResult extends SearchResultDefault<CategoryProps, Category> {
    }
    interface ICategoryRepository extends ISearchableRepository<CategoryProps, Category, SearchParams, SearchResult> {
        findByName(name: string): Promise<Category>;
    }
}
export default CategoryRepository;
