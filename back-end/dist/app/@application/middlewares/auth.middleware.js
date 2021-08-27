"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_helper_1 = require("./../helpers/jwt.helper");
const enums_1 = require("../enums");
const utils_1 = require("../utils");
let AuthMiddleware = class AuthMiddleware {
    constructor(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    async use(req, res, next) {
        const token = utils_1.extractToken(req.headers);
        const verifiedUser = await this.jwtHelper.verify(token);
        const verifiedPermission = await this.jwtHelper.verify(verifiedUser.permissions);
        req.permissions = verifiedPermission.permissions;
        if (req.method === enums_1.RequestMethods.POST) {
            req.body.createdBy = verifiedUser.phoneNumber;
        }
        else if (req.method === enums_1.RequestMethods.PUT) {
            req.body.updatedBy = verifiedUser.phoneNumber;
        }
        else if (req.method === enums_1.RequestMethods.DELETE) {
            req.body.deletedBy = verifiedUser.phoneNumber;
        }
        next();
    }
};
AuthMiddleware = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_helper_1.JWTHelper])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map