"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    constructor(appErrorCode, message) {
        super(message);
        this.errorResponse;
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=base.error.js.map