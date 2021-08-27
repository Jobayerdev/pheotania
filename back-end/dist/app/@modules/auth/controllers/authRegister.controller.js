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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRegisterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const register_dto_1 = require("../dtos/register.dto");
const auth_register_service_1 = require("./../services/auth-register.service");
let AuthRegisterController = class AuthRegisterController {
    constructor(authRegisterService) {
        this.authRegisterService = authRegisterService;
    }
    async register(authRegisterDto) {
        return this.authRegisterService.authRegister(authRegisterDto);
    }
};
__decorate([
    common_1.Post(''),
    swagger_1.ApiBody({ type: register_dto_1.AuthRegisterDTO }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.AuthRegisterDTO]),
    __metadata("design:returntype", Promise)
], AuthRegisterController.prototype, "register", null);
AuthRegisterController = __decorate([
    swagger_1.ApiTags('Register'),
    common_1.Controller('auth/register'),
    __metadata("design:paramtypes", [auth_register_service_1.AuthRegisterService])
], AuthRegisterController);
exports.AuthRegisterController = AuthRegisterController;
//# sourceMappingURL=authRegister.controller.js.map