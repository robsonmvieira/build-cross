import { Model } from 'sequelize-typescript';
declare type CategoryModelProperties = {
    id: string;
    name: string;
    is_active: boolean;
    description?: string;
    created_at: Date;
    updated_at: Date;
};
export declare class CategorySequelizeModel extends Model<CategoryModelProperties> {
    id: string;
    name: string;
    is_active: boolean;
    description: string | null;
    created_at: Date;
    updated_at: Date;
}
export {};
