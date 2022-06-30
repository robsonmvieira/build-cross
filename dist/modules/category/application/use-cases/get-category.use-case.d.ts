import { CategoryResponse, GetCategoryDTO } from "../../dtos";
import { CategoryMapper } from "#modules/category/infra/database/category.mapper";
import CategoryRepository from "#modules/category/infra/repository/i-category.repository";
import { UseCase as DefaultUseCase } from '#core/application/use-cases';
export declare namespace GetCategoryUseCase {
    class UseCase implements DefaultUseCase<GetCategoryDTO, CategoryResponse> {
        private readonly categoryRepository;
        private readonly categoryMapper;
        constructor(categoryRepository: CategoryRepository.ICategoryRepository, categoryMapper: CategoryMapper);
        execute(input: GetCategoryDTO): Promise<CategoryResponse>;
    }
}
