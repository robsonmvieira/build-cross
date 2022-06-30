import {  DeleteCategoryDTO } from "../../dtos";
import CategoryRepository  from "#modules/category/infra/repository/i-category.repository";
import { UseCase as DefaultUseCase } from '#core/application/use-cases'


export namespace DeleteCategoryUseCase {
  
  export class UseCase implements DefaultUseCase<DeleteCategoryDTO, void> {
    constructor(
      private readonly categoryRepository: CategoryRepository.ICategoryRepository,
    ) {}
  
    async execute(input: DeleteCategoryDTO): Promise<void>{
      await this.categoryRepository.delete(input.id);
    }
  }

}
export default DeleteCategoryUseCase


