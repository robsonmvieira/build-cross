"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryUseCase = void 0;
var GetCategoryUseCase;
(function (GetCategoryUseCase) {
    class UseCase {
        constructor(categoryRepository, categoryMapper) {
            this.categoryRepository = categoryRepository;
            this.categoryMapper = categoryMapper;
        }
        async execute(input) {
            const category = await this.categoryRepository.findById(input.id);
            const output = this.categoryMapper.fromOrmToOutput(category);
            return output;
        }
    }
    GetCategoryUseCase.UseCase = UseCase;
})(GetCategoryUseCase = exports.GetCategoryUseCase || (exports.GetCategoryUseCase = {}));
