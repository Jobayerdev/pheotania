"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const successResponse_type_1 = require("../types/successResponse.type");
const operators_1 = require("rxjs/operators");
let FilterResponseInterceptor = class FilterResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe(operators_1.map((content) => {
            if (content instanceof Error) {
                throw content;
            }
            else if ((content === null || content === void 0 ? void 0 : content.data) && content.total) {
                return new successResponse_type_1.AppSuccessResponse('successful response', content.data, content.total);
            }
            else if (Array.isArray(content)) {
                return new successResponse_type_1.AppSuccessResponse('successful response', content);
            }
            else if (typeof content === 'object') {
                return new successResponse_type_1.AppSuccessResponse('successful response', content);
            }
            else if (typeof content === 'undefined') {
                return new successResponse_type_1.AppSuccessResponse('successful response', null);
            }
            else {
                throw new common_1.HttpException('Unknown error', common_1.HttpStatus.BAD_REQUEST);
            }
        }));
    }
};
FilterResponseInterceptor = __decorate([
    common_1.Injectable()
], FilterResponseInterceptor);
exports.FilterResponseInterceptor = FilterResponseInterceptor;
//# sourceMappingURL=filterResponse.interceptor.js.map