import { CategoryResponse } from "../../dtos";
import { CategoryMapper } from "../../infra/database/category.mapper";
import CategoryRepository  from "../../infra/repository/i-category.repository";
import { ListCategoriesInputProps } from "../../dtos";
import { ListPaginationResponse } from "../../../../core/application/dto";
import  { UseCase as DefaultUseCase}  from '../../../../core/application/use-cases'


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



