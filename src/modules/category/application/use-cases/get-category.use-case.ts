import { CategoryResponse, GetCategoryDTO } from "../../dtos";
import { CategoryMapper } from "#modules/category/infra/database/category.mapper";
import CategoryRepository  from "#modules/category/infra/repository/i-category.repository";
import { UseCase as DefaultUseCase } from '#core/application/use-cases'



export namespace GetCategoryUseCase {
  export class UseCase implements DefaultUseCase<GetCategoryDTO, CategoryResponse> {
    constructor(
      private readonly categoryRepository: CategoryRepository.ICategoryRepository,
      private readonly categoryMapper: CategoryMapper
    ) {}
  
    async execute(input: GetCategoryDTO): Promise<CategoryResponse>{
  
      const category = await this.categoryRepository.findById(input.id);
      const output = this.categoryMapper.fromOrmToOutput(category);
      return output;
    }
  }

}



