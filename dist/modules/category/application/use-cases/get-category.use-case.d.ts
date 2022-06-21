import { CategoryResponse, GetCategoryDTO } from "../../dtos";
import { CategoryMapper } from "../../infra/database/category.mapper";
import CategoryReposiory from "../../infra/repository/i-category.repository";
import { UseCase } from '../../../../core/application/use-cases';
export declare class GetCategoryUseCase implements UseCase<GetCategoryDTO, CategoryResponse> {
    private readonly categoryRepository;
    private readonly categoryMapper;
    constructor(categoryRepository: CategoryReposiory.ICategoryRepository, categoryMapper: CategoryMapper);
    execute(input: GetCategoryDTO): Promise<CategoryResponse>;
}
