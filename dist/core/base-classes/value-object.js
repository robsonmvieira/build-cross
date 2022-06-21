"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
class ValueObject {
    constructor(value) {
        this._value = Object.freeze(value);
    }
    equals(id) {
        if (id === null || id === undefined) {
            return false;
        }
        if (!(id instanceof this.constructor)) {
            return false;
        }
        return id.value === this.value;
    }
    get value() {
        return this._value;
    }
    toString() {
        return String(this.value);
    }
}
exports.ValueObject = ValueObject;
