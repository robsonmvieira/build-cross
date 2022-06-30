"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidatorFactory = exports.CategoryValidator = exports.CategoryModelRules = void 0;
const class_validator_1 = require("#core/validators/class-validator");
const class_validator_2 = require("class-validator");
class CategoryModelRules {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    (0, class_validator_2.MaxLength)(100),
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], CategoryModelRules.prototype, "name", void 0);
__decorate([
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", String)
], CategoryModelRules.prototype, "description", void 0);
__decorate([
    (0, class_validator_2.IsBoolean)(),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], CategoryModelRules.prototype, "isActive", void 0);
exports.CategoryModelRules = CategoryModelRules;
class CategoryValidator extends class_validator_1.ClassValidator {
    validate(data) {
        return super.validate(new CategoryModelRules(data));
    }
}
exports.CategoryValidator = CategoryValidator;
class CategoryValidatorFactory {
    static create() {
        return new CategoryValidator();
    }
}
exports.CategoryValidatorFactory = CategoryValidatorFactory;
