"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemorySearchableRepository = exports.InMemoryRepository = void 0;
const exceptions_1 = require("../exceptions");
const base_repository_1 = require("./base.repository");
class InMemoryRepository {
    constructor() {
        this.data = [];
    }
    async update(data) {
        await this.get(data.id);
        const index = this.data.findIndex(item => item.id === data.id);
        this.data[index] = data;
    }
    async delete(id) {
        await this.get(id);
        this.data = this.data.filter(item => item.id !== id);
    }
    async findById(id) {
        return this.get(id);
    }
    async findAll() {
        return this.data;
    }
    async create(data) {
        this.data.push(data);
    }
    async get(id) {
        const result = this.data.find(item => item.id === id);
        if (!result) {
            throw new exceptions_1.NotFoundException("Entity not found");
        }
        return result;
    }
}
exports.InMemoryRepository = InMemoryRepository;
class InMemorySearchableRepository extends InMemoryRepository {
    constructor() {
        super(...arguments);
        this.searchbableFields = [];
    }
    async search(props) {
        const itemsFiltered = await this.applyFilter(this.data, props.filter);
        const itemsSorted = await this.applySort(itemsFiltered, props.sort, props.sort_dir);
        const itemsPaginated = await this.applyPaginate(itemsSorted, props.page, props.per_page);
        return new base_repository_1.SearchResult({
            items: itemsPaginated,
            total: itemsFiltered.length,
            current_page: props.page,
            per_page: props.per_page,
            sort: props.sort,
            sort_dir: props.sort_dir,
            filter: props.filter
        });
    }
    async applySort(data, sort, sort_dir) {
        if (!sort || !this.searchbableFields.includes(sort))
            return data;
        return [...data].sort((a, b) => {
            if (a.value[sort] < b.value[sort]) {
                return sort_dir === "asc" ? -1 : 1;
            }
            if (a.value[sort] > b.value[sort]) {
                return sort_dir === "asc" ? 1 : -1;
            }
            return 0;
        });
    }
    async applyPaginate(data, page, per_page) {
        const start = (page - 1) * per_page;
        const limit = start + per_page;
        return data.slice(start, limit);
        return;
    }
}
exports.InMemorySearchableRepository = InMemorySearchableRepository;
