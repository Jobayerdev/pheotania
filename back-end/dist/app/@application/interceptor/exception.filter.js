"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let statusCode;
        let errorMessage = [exception.message];
        if (exception instanceof TypeError) {
            statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            if (exception.message) {
                errorMessage = [exception === null || exception === void 0 ? void 0 : exception.message];
            }
            else {
                errorMessage = ['Internal Server Error'];
            }
        }
        else if (exception instanceof common_1.HttpException) {
            statusCode = exception.getStatus();
            const res = exception.getResponse();
            errorMessage = (res === null || res === void 0 ? void 0 : res.message) === 'string' ? [res.message] : res.message;
        }
        else {
            statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            errorMessage = errorMessage ? errorMessage : ['Internal Server Error'];
        }
        response.status(statusCode).json({
            success: false,
            status: statusCode,
            errorMessage,
        });
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=exception.filter.js.map