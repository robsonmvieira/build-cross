import { CategoryResponse } from "../../dtos";
import { Category } from "../../entities/category.entity";
export declare class CategoryMapper {
    fromOrmToEntity(data: CategoryOrm): Category;
    fromOrmToOutput(data: Category): CategoryResponse;
}
export declare type CategoryOrm = {
    id: string;
    name: string;
    description: string | null;
    is_active: boolean;
    createdAt: Date;
    updatedAt: Date;
};
