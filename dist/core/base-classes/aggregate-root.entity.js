"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRoot = void 0;
const entity_base_1 = require("./entity.base");
class AggregateRoot extends entity_base_1.Entity {
    get id() {
        return this._id.value;
    }
}
exports.AggregateRoot = AggregateRoot;
