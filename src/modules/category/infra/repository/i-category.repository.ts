import { Category, CategoryProps } from "#modules/category/entities";
import { 
  ISearchableRepository,
  SearchParams as SearchParamsDefault,
  SearchResult as SearchResultDefault } from '#core/repository/base.repository';

export namespace CategoryRepository {
  export class SearchParams extends SearchParamsDefault{}
  
  export class SearchResult extends SearchResultDefault<CategoryProps, Category>{}
  
  export interface ICategoryRepository extends ISearchableRepository<CategoryProps, Category, SearchParams, SearchResult>{}
}

export default CategoryRepository;
