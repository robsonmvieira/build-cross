import { CategoryResponse, CreateCategoryDTO } from "../../dtos";
import { CategoryMapper } from "#modules/category/infra/database/category.mapper";
import CategoryRepository from "#modules/category/infra/repository/i-category.repository";
import { UseCase as DefaultUseCase } from '#core/application/use-cases/i-use-case';
export declare namespace CreateCategoryUseCase {
    class UseCase implements DefaultUseCase<CreateCategoryDTO, CategoryResponse> {
        private readonly categoryRepository;
        private readonly categoryMapper;
        constructor(categoryRepository: CategoryRepository.ICategoryRepository, categoryMapper: CategoryMapper);
        execute(props: CreateCategoryDTO): Promise<CategoryResponse>;
    }
}
export default CreateCategoryUseCase;
