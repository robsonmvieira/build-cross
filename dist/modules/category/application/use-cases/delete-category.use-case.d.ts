import { DeleteCategoryDTO } from "../../dtos";
import CategoryRepository from "../../infra/repository/i-category.repository";
import { UseCase as DefaultUseCase } from '../../../../core/application/use-cases';
export declare namespace DeleteCategoryUseCase {
    class UseCase implements DefaultUseCase<DeleteCategoryDTO, void> {
        private readonly categoryRepository;
        constructor(categoryRepository: CategoryRepository.ICategoryRepository);
        execute(input: DeleteCategoryDTO): Promise<void>;
    }
}
export default DeleteCategoryUseCase;
