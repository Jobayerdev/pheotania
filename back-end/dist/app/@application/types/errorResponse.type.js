"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppErrorResponse = void 0;
class AppErrorResponse {
    constructor(errorName, errorCode, message, developerMessage) {
        this.status = 'ERROR';
        this.errorName = errorName;
        this.errorCode = errorCode;
        this.message = message;
        this.developerMessage = developerMessage || undefined;
    }
    setDeveloperMessage(msg) {
        this.developerMessage = msg;
    }
}
exports.AppErrorResponse = AppErrorResponse;
//# sourceMappingURL=errorResponse.type.js.map