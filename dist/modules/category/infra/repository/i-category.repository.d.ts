import { Category, CategoryProps } from "#modules/category/entities";
import { ISearchableRepository, SearchParams as SearchParamsDefault, SearchResult as SearchResultDefault } from '#core/repository/base.repository';
export declare namespace CategoryRepository {
    class SearchParams extends SearchParamsDefault {
    }
    class SearchResult extends SearchResultDefault<CategoryProps, Category> {
    }
    interface ICategoryRepository extends ISearchableRepository<CategoryProps, Category, SearchParams, SearchResult> {
    }
}
export default CategoryRepository;
