import { CategoryResponse,ListCategoriesInputProps  } from "../../dtos";
import { CategoryMapper } from "#modules/category/infra/database/category.mapper";
import CategoryRepository  from "#modules/category/infra/repository/i-category.repository";
import { ListPaginationResponse } from "#core/application/dto";
import  { UseCase as DefaultUseCase}  from '#core/application/use-cases'


export namespace ListCategoriesUseCase {
  export class UseCase implements DefaultUseCase<ListCategoriesInputProps, ListPaginationResponse<CategoryResponse[]>> {
    constructor(
      private readonly categoryRepository: CategoryRepository.ICategoryRepository,
      private readonly categoryMapper: CategoryMapper
    ) {}
  
    async execute(input: ListCategoriesInputProps): Promise<ListPaginationResponse<CategoryResponse[]>>{
      const searchParams = new CategoryRepository.SearchParams(input)
      const searchResult = await this.categoryRepository.search(searchParams);
      return {
        ...searchResult,
        items: searchResult.items.map(item => this.categoryMapper.fromOrmToOutput(item))
      }
    }
  
  
  }

}



