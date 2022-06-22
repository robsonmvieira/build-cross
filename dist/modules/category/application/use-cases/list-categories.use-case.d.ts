import { CategoryResponse } from "../../dtos";
import { CategoryMapper } from "../../infra/database/category.mapper";
import CategoryRepository from "../../infra/repository/i-category.repository";
import { ListCategoriesInputProps } from "../../dtos";
import { ListPaginationResponse } from "../../../../core/application/dto";
import { UseCase as DefaultUseCase } from '../../../../core/application/use-cases';
export declare namespace ListCategoriesUseCase {
    class UseCase implements DefaultUseCase<ListCategoriesInputProps, ListPaginationResponse<CategoryResponse[]>> {
        private readonly categoryRepository;
        private readonly categoryMapper;
        constructor(categoryRepository: CategoryRepository.ICategoryRepository, categoryMapper: CategoryMapper);
        execute(input: ListCategoriesInputProps): Promise<ListPaginationResponse<CategoryResponse[]>>;
    }
}
