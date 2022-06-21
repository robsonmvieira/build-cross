"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const _1 = require(".");
const _2 = require(".");
class ValidationException extends _1.ExceptionBase {
    constructor() {
        super(...arguments);
        this.name = _2.Exceptions.validation;
    }
}
exports.ValidationException = ValidationException;
