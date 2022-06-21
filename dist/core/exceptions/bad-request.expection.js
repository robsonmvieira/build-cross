"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const _1 = require(".");
const _2 = require(".");
class BadRequestException extends _1.ExceptionBase {
    constructor() {
        super(...arguments);
        this.name = _2.Exceptions.badRequest;
    }
}
exports.BadRequestException = BadRequestException;
