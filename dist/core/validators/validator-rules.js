"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.ValidatorRules = void 0;
const exceptions_1 = require("../exceptions");
class ValidatorRules {
    constructor(value, property) {
        this.value = value;
        this.property = property;
    }
    static values(value, property) {
        return new ValidatorRules(value, property);
    }
    required() {
        if (this.value === null || this.value === undefined || this.value === '') {
            throw new exceptions_1.ValidationException(`The ${this.property} is required`);
        }
        return this;
    }
    string() {
        if (typeof this.value !== 'string') {
            throw new exceptions_1.ValidationException(`The ${this.property} must be a string`);
        }
        return this;
    }
    number() {
        if (typeof this.value !== 'number') {
            throw new exceptions_1.ValidationException(`The value must be a number`);
        }
        return this;
    }
    boolean() {
        if (typeof this.value !== 'boolean') {
            throw new exceptions_1.ValidationException(`The ${this.value} must be a boolean`);
        }
        return this;
    }
    maxLength(max) {
        if (!isEmpty(max) && this.value.length > max) {
            throw new exceptions_1.ValidationException(`The ${this.property} length must be less than ${max} characters`);
        }
        return this;
    }
    minLength(min) {
        if (!isEmpty(min) && this.value.length < min) {
            throw new exceptions_1.ValidationException(`The ${this.property} length must be greater than ${min} characters`);
        }
        return this;
    }
}
exports.ValidatorRules = ValidatorRules;
function isEmpty(value) {
    return value === null || value === undefined || value === '';
}
exports.isEmpty = isEmpty;
