"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorException = void 0;
const common_1 = require("@nestjs/common");
class ApiErrorException extends common_1.HttpException {
    constructor(error) {
        super(error.response, error.status);
    }
}
exports.ApiErrorException = ApiErrorException;
//# sourceMappingURL=api-error.exception.js.map