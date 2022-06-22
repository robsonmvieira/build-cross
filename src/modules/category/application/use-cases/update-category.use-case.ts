import { CategoryResponse, UpdateCategoryDTO } from "../../dtos";
import { Category } from "../../entities";
import { CategoryMapper } from "../../infra/database/category.mapper";
import CategoryRepository  from "../../infra/repository/i-category.repository";
import  { UseCase as DefaultUseCase}  from '../../../../core/application/use-cases/i-use-case'
import { UniqueID } from "../../../../core/value-objects/ID.vo";


export namespace UpdateCategoryUseCase {
  export class UseCase implements DefaultUseCase<UpdateCategoryDTO, CategoryResponse> {
    constructor(
      private readonly categoryRepository: CategoryRepository.ICategoryRepository,
      private readonly categoryMapper: CategoryMapper
    ) {}
  
    async execute(props: UpdateCategoryDTO): Promise<CategoryResponse>{
      const id = new UniqueID(props.id)
      const category =  Category.create(props, id).getResult();
      await this.categoryRepository.update(category);
      const output = this.categoryMapper.fromOrmToOutput(category);
      return output;
    }
  }

}

export default UpdateCategoryUseCase;

