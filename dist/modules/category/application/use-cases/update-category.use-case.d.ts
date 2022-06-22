import { CategoryResponse, UpdateCategoryDTO } from "../../dtos";
import { CategoryMapper } from "../../infra/database/category.mapper";
import CategoryRepository from "../../infra/repository/i-category.repository";
import { UseCase as DefaultUseCase } from '../../../../core/application/use-cases/i-use-case';
export declare namespace UpdateCategoryUseCase {
    class UseCase implements DefaultUseCase<UpdateCategoryDTO, CategoryResponse> {
        private readonly categoryRepository;
        private readonly categoryMapper;
        constructor(categoryRepository: CategoryRepository.ICategoryRepository, categoryMapper: CategoryMapper);
        execute(props: UpdateCategoryDTO): Promise<CategoryResponse>;
    }
}
export default UpdateCategoryUseCase;
