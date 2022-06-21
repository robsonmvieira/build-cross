"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassValidator = void 0;
const class_validator_1 = require("class-validator");
class ClassValidator {
    constructor() {
        this.errors = null;
        this.validatedData = null;
    }
    validate(data) {
        const errors = (0, class_validator_1.validateSync)(data);
        if (errors.length > 0) {
            this.errors = {};
            for (const error of errors) {
                const field = error.property;
                this.errors[field] = Object.values(error.constraints);
            }
        }
        else {
            this.validatedData = data;
        }
        return !errors.length;
    }
}
exports.ClassValidator = ClassValidator;
