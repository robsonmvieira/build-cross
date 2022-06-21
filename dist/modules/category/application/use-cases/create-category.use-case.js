"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryUseCase = void 0;
const entities_1 = require("../../entities");
var CreateCategoryUseCase;
(function (CreateCategoryUseCase) {
    class UseCase {
        constructor(categoryRepository, categoryMapper) {
            this.categoryRepository = categoryRepository;
            this.categoryMapper = categoryMapper;
        }
        async execute(props) {
            const category = entities_1.Category.create(props).getResult();
            await this.categoryRepository.create(category);
            const output = this.categoryMapper.fromOrmToOutput(category);
            return output;
        }
    }
    CreateCategoryUseCase.UseCase = UseCase;
})(CreateCategoryUseCase = exports.CreateCategoryUseCase || (exports.CreateCategoryUseCase = {}));
exports.default = CreateCategoryUseCase;
