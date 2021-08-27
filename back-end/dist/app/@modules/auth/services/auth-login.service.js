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
exports.AuthLoginService = void 0;
const helpers_1 = require("../../../@application/helpers");
const common_1 = require("@nestjs/common");
const user_entities_1 = require("../../user/entities/user.entities");
const user_service_1 = require("./../../user/services/user.service");
let AuthLoginService = class AuthLoginService {
    constructor(userService, jwtHelper, bcryptHelper) {
        this.userService = userService;
        this.jwtHelper = jwtHelper;
        this.bcryptHelper = bcryptHelper;
    }
    async loginUser(payload) {
        try {
            const user = await this.userService.checkIfUserExist(payload.phoneNumber);
            if (!user) {
                throw new Error('User Not Exist');
            }
            const isPassCorrect = await this.bcryptHelper.compareHash(payload.password, user.password);
            if (!isPassCorrect) {
                throw new Error('Invalid Password');
            }
            const userPermissions = [
                'SERVICE_CREATE',
                'SERVICE_UPDATE',
                'SERVICE_VIEW',
            ];
            const permissions = await this.jwtHelper.makePermissionToken(userPermissions);
            delete user.password;
            const resPayload = Object.assign(Object.assign({}, user), { permissions });
            const token = await this.jwtHelper.makeAccessToken(resPayload);
            return token;
        }
        catch (error) {
            return error;
        }
    }
};
AuthLoginService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        helpers_1.JWTHelper,
        helpers_1.BcryptHelper])
], AuthLoginService);
exports.AuthLoginService = AuthLoginService;
//# sourceMappingURL=auth-login.service.js.map