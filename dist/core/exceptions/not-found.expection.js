"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const _1 = require(".");
const _2 = require(".");
class NotFoundException extends _1.ExceptionBase {
    constructor() {
        super(...arguments);
        this.name = _2.Exceptions.notFound;
    }
}
exports.NotFoundException = NotFoundException;
