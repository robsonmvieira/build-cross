"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryInMemoryRepository = void 0;
const in_memory_repository_1 = require("#core/repository/in-memory.repository");
class CategoryInMemoryRepository extends in_memory_repository_1.InMemorySearchableRepository {
    async applyFilter(data, filter) {
        if (!filter)
            return data;
        return data.filter(item => item.props.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
    }
    async findByName(name) {
        throw new Error("Method not implemented.");
    }
}
exports.CategoryInMemoryRepository = CategoryInMemoryRepository;
