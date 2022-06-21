"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const ID_vo_1 = require("../value-objects/ID.vo");
const isEntity = (v) => {
    return v instanceof Entity;
};
class Entity {
    constructor(props, id) {
        this.props = props;
        this._id = id || new ID_vo_1.UniqueID();
        this._props = props;
    }
    get createdAt() {
        var _a;
        return (_a = this._props.createdAt) !== null && _a !== void 0 ? _a : new Date();
    }
    get updatedAt() {
        var _a;
        return (_a = this._props.updatedAt) !== null && _a !== void 0 ? _a : new Date();
    }
    get isDeleted() {
        var _a;
        return (_a = this._props.isDeleted) !== null && _a !== void 0 ? _a : false;
    }
    get isBlocked() {
        var _a;
        return (_a = this._props.isBlocked) !== null && _a !== void 0 ? _a : false;
    }
    equals(object) {
        if (object == null || object == undefined) {
            return false;
        }
        if (this === object) {
            return true;
        }
        if (!isEntity(object)) {
            return false;
        }
        return this._id.equals(object._id);
    }
    get id() {
        return this._id.value;
    }
    toJSON() {
        return Object.assign({ id: this.id }, this._props);
    }
    get value() {
        return Object.assign({}, this._props);
    }
}
exports.Entity = Entity;
