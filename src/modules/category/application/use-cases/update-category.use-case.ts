import { UpdateCategoryDTO } from "../../dtos";
import { Category } from "../../entities";
import CategoryRepository  from "../../infra/repository/i-category.repository";
import  { UseCase as DefaultUseCase}  from '../../../../core/application/use-cases/i-use-case'
import { UniqueID } from "../../../../core/value-objects/ID.vo";


export namespace UpdateCategoryUseCase {
  export class UseCase implements DefaultUseCase<UpdateCategoryDTO, void> {
    constructor(
      private readonly categoryRepository: CategoryRepository.ICategoryRepository
    ) {}
  
    async execute(props: UpdateCategoryDTO): Promise<void>{
      const id = new UniqueID(props.id)
      const category = Category.create(props, id).getResult();
      await this.categoryRepository.update(category);
    }
  }

}

export default UpdateCategoryUseCase;

