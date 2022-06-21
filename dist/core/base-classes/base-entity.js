"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDomainEntity = void 0;
class BaseDomainEntity {
    constructor(createdAt, updatedAt, isDeleted, isBlocked, deletedAt) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isDeleted = isDeleted;
        this.isBlocked = isBlocked;
        this.deletedAt = deletedAt;
        this.createdAt = createdAt !== null && createdAt !== void 0 ? createdAt : new Date();
        this.updatedAt = updatedAt !== null && updatedAt !== void 0 ? updatedAt : new Date();
        this.isDeleted = isDeleted !== null && isDeleted !== void 0 ? isDeleted : false;
        this.isBlocked = isBlocked !== null && isBlocked !== void 0 ? isBlocked : false;
        this.deletedAt = isDeleted ? deletedAt : null;
    }
}
exports.BaseDomainEntity = BaseDomainEntity;
