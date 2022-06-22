"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesUseCase = void 0;
const i_category_repository_1 = require("../../infra/repository/i-category.repository");
var ListCategoriesUseCase;
(function (ListCategoriesUseCase) {
    class UseCase {
        constructor(categoryRepository, categoryMapper) {
            this.categoryRepository = categoryRepository;
            this.categoryMapper = categoryMapper;
        }
        async execute(input) {
            const searchParams = new i_category_repository_1.default.SearchParams(input);
            const searchResult = await this.categoryRepository.search(searchParams);
            return Object.assign(Object.assign({}, searchResult), { items: searchResult.items.map(item => this.categoryMapper.fromOrmToOutput(item)) });
        }
    }
    ListCategoriesUseCase.UseCase = UseCase;
})(ListCategoriesUseCase = exports.ListCategoriesUseCase || (exports.ListCategoriesUseCase = {}));
