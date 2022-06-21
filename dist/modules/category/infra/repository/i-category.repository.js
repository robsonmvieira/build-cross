"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const base_repository_1 = require("../../../../core/repository/base.repository");
var CategoryRepository;
(function (CategoryRepository) {
    class SearchParams extends base_repository_1.SearchParams {
    }
    CategoryRepository.SearchParams = SearchParams;
    class SearchResult extends base_repository_1.SearchResult {
    }
    CategoryRepository.SearchResult = SearchResult;
})(CategoryRepository = exports.CategoryRepository || (exports.CategoryRepository = {}));
exports.default = CategoryRepository;
