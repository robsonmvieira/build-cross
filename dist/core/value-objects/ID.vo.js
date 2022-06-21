"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueID = void 0;
const uuid_1 = require("uuid");
const value_object_1 = require("../base-classes/value-object");
class UniqueID extends value_object_1.ValueObject {
    constructor(id) {
        super(id ? id : (0, uuid_1.v4)());
    }
    validate() {
        return (0, uuid_1.validate)(this.toString());
    }
}
exports.UniqueID = UniqueID;
