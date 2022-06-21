import { CategoryResponse } from "../../dtos";
import { CategoryMapper } from "../../infra/database/category.mapper";
import CategoryReposiory from "../../infra/repository/i-category.repository";
import { UseCase } from '../../../../core/application/use-cases';
import { ListCategoriesInputProps } from "../../dtos";
import { ListPaginationResponse } from "../../../../core/application/dto";
export declare class ListCategoriesUseCase implements UseCase<ListCategoriesInputProps, ListPaginationResponse<CategoryResponse[]>> {
    private readonly categoryRepository;
    private readonly categoryMapper;
    constructor(categoryRepository: CategoryReposiory.ICategoryRepository, categoryMapper: CategoryMapper);
    execute(input: ListCategoriesInputProps): Promise<ListPaginationResponse<CategoryResponse[]>>;
}
