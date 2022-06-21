"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(isSuccess, error, value) {
        if (isSuccess && error) {
            throw new Error('Result: cannot be both a success and a failure');
        }
        if (!isSuccess && !error) {
            throw new Error('Result: must be either a success or a failure');
        }
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.error = error;
        this._value = value;
        Object.freeze(this);
    }
    getResult() {
        if (!this.isSuccess) {
            console.log(this.error);
            throw new Error('Can not get the value of an error result. Use errorValue instead.');
        }
        return this._value;
    }
    errorValue() {
        return this.error;
    }
    static ok(value) {
        return new Result(true, null, value);
    }
    static fail(error) {
        return new Result(false, error);
    }
    static combine(results) {
        for (const result of results) {
            if (result.isFailure)
                return result;
        }
        return Result.ok();
    }
}
exports.Result = Result;
