"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesUseCase = void 0;
const i_category_repository_1 = require("../../infra/repository/i-category.repository");
class ListCategoriesUseCase {
    constructor(categoryRepository, categoryMapper) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }
    async execute(input) {
        const searchParams = new i_category_repository_1.default.SearchParams(input);
        const searchresult = await this.categoryRepository.search(searchParams);
        return Object.assign(Object.assign({}, searchresult), { items: searchresult.items.map(item => this.categoryMapper.fromOrmToOutput(item)) });
    }
}
exports.ListCategoriesUseCase = ListCategoriesUseCase;
