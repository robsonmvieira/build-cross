"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMapper = void 0;
const ID_vo_1 = require("../../../../core/value-objects/ID.vo");
const category_entity_1 = require("../../entities/category.entity");
class CategoryMapper {
    fromOrmToEntity(data) {
        const props = {
            name: data.name,
            description: data.description,
            isActive: data.is_active,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
        const id = new ID_vo_1.UniqueID(data.id);
        return category_entity_1.Category.create(props, id).getResult();
    }
    fromOrmToOutput(data) {
        var _a;
        const props = {
            id: data.id,
            name: data.props.name,
            description: (_a = data.props.description) !== null && _a !== void 0 ? _a : null,
            is_active: data.props.isActive,
            created_at: data.created_at,
            updatedAt: data.updatedAt
        };
        return props;
    }
}
exports.CategoryMapper = CategoryMapper;
