"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryUseCase = void 0;
class GetCategoryUseCase {
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
exports.GetCategoryUseCase = GetCategoryUseCase;
