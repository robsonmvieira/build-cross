import { UpdateCategoryDTO } from "../../dtos";
import CategoryRepository from "../../infra/repository/i-category.repository";
import { UseCase as DefaultUseCase } from '../../../../core/application/use-cases/i-use-case';
export declare namespace UpdateCategoryUseCase {
    class UseCase implements DefaultUseCase<UpdateCategoryDTO, void> {
        private readonly categoryRepository;
        constructor(categoryRepository: CategoryRepository.ICategoryRepository);
        execute(props: UpdateCategoryDTO): Promise<void>;
    }
}
export default UpdateCategoryUseCase;
