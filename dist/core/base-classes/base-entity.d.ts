export declare abstract class BaseDomainEntity {
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: boolean;
    isBlocked?: boolean;
    deletedAt?: Date | null;
    constructor(createdAt?: Date, updatedAt?: Date, isDeleted?: boolean, isBlocked?: boolean, deletedAt?: Date | null);
}
