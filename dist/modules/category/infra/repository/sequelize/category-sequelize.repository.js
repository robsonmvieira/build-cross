"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySequelizeRepository = void 0;
const entities_1 = require("#modules/category/entities");
const ID_vo_1 = require("#core/value-objects/ID.vo");
const exceptions_1 = require("#core/exceptions");
var CategorySequelizeRepository;
(function (CategorySequelizeRepository) {
    class Repository {
        constructor(categoryModel) {
            this.categoryModel = categoryModel;
            this.searchableFields = ['name', 'description'];
        }
        async create(data) {
            const payload = Object.assign(Object.assign(Object.assign({}, data.toJSON()), { is_active: data.is_active, created_at: data.created_at, updated_at: data.updatedAt }));
            await this.categoryModel.create(payload);
        }
        async update(data) {
            await this.get(data.id);
            await this.categoryModel.update(data.toJSON(), { where: { id: data.id }, });
        }
        async delete(id) {
            await this.get(id);
            await this.categoryModel.destroy({ where: { id } });
        }
        async findById(id) {
            const response = await this.get(id);
            return this.toCategory(response);
        }
        async findAll() {
            const response = await this.categoryModel.findAll();
            const output = response.map(category => this.toCategory(category));
            return output;
        }
        async applyFilter(data, filter) {
            if (!filter)
                return data;
            return data.filter(item => item.props.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
        }
        async search(props) {
            throw new Error("Method not implemented.");
        }
        async get(id) {
            return this.categoryModel.findByPk(id, {
                rejectOnEmpty: new exceptions_1.NotFoundException('Entity not found')
            });
        }
        toCategory(categoryModel) {
            const payload = Object.assign(Object.assign(Object.assign({}, categoryModel.toJSON()), { isActive: categoryModel.is_active }));
            const uniqueId = new ID_vo_1.UniqueID(payload.id);
            return entities_1.Category.create(payload, uniqueId).getResult();
        }
    }
    CategorySequelizeRepository.Repository = Repository;
})(CategorySequelizeRepository = exports.CategorySequelizeRepository || (exports.CategorySequelizeRepository = {}));
exports.default = CategorySequelizeRepository;
