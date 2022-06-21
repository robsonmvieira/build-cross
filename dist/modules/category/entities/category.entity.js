"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const aggregate_root_entity_1 = require("../../../core/base-classes/aggregate-root.entity");
const result_1 = require("../../../core/base-classes/result");
const exceptions_1 = require("../../../core/exceptions");
const validator_rules_1 = require("../../../core/validators/validator-rules");
const category_validator_1 = require("../validator/category.validator");
class Category extends aggregate_root_entity_1.AggregateRoot {
    constructor(props, id) {
        super(props, id);
        this.props = props;
    }
    static create(data, id) {
        const payload = {
            name: data.name,
            description: data.description,
            isActive: data.isActive
        };
        Category.validate(payload);
        return result_1.Result.ok(new Category(payload, id));
    }
    static validate(data) {
        const validator = category_validator_1.CategoryValidatorFactory.create();
        const isValidresult = validator.validate(data);
        if (!isValidresult) {
            throw new exceptions_1.BadRequestException('Invalid data was provided, please check the errors', validator.errors);
        }
    }
    updateName(name) {
        validator_rules_1.ValidatorRules.values(name, 'name').required().string();
        this.props.name = name;
    }
    activate() {
        validator_rules_1.ValidatorRules.values(true, 'isActive').boolean();
        this.props.isActive = true;
    }
    deactivate() {
        validator_rules_1.ValidatorRules.values(false, 'isActive').boolean();
        this.props.isActive = false;
    }
    get name() {
        return this.props.name;
    }
    get description() {
        var _a;
        return (_a = this.props) === null || _a === void 0 ? void 0 : _a.description;
    }
    get is_active() {
        return this._props.isActive;
    }
    get created_at() {
        return this.createdAt;
    }
}
exports.Category = Category;
