"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryUseCase = void 0;
const entities_1 = require("#modules/category/entities");
const ID_vo_1 = require("#core/value-objects/ID.vo");
var UpdateCategoryUseCase;
(function (UpdateCategoryUseCase) {
    class UseCase {
        constructor(categoryRepository) {
            this.categoryRepository = categoryRepository;
        }
        async execute(props) {
            const id = new ID_vo_1.UniqueID(props.id);
            const category = entities_1.Category.create(props, id).getResult();
            await this.categoryRepository.update(category);
        }
    }
    UpdateCategoryUseCase.UseCase = UseCase;
})(UpdateCategoryUseCase = exports.UpdateCategoryUseCase || (exports.UpdateCategoryUseCase = {}));
exports.default = UpdateCategoryUseCase;
