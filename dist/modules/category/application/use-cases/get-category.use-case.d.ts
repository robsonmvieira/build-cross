import { CategoryResponse, GetCategoryDTO } from "../../dtos";
import { CategoryMapper } from "../../infra/database/category.mapper";
import CategoryRepository from "../../infra/repository/i-category.repository";
import { UseCase } from '../../../../core/application/use-cases';
export declare class GetCategoryUseCase implements UseCase<GetCategoryDTO, CategoryResponse> {
    private readonly categoryRepository;
    private readonly categoryMapper;
    constructor(categoryRepository: CategoryRepository.ICategoryRepository, categoryMapper: CategoryMapper);
    execute(input: GetCategoryDTO): Promise<CategoryResponse>;
}
