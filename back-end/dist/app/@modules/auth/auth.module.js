"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const authLogin_controller_1 = require("./controllers/authLogin.controller");
const auth_login_service_1 = require("./services/auth-login.service");
const helper_module_1 = require("../../@application/helpers/helper.module");
const common_1 = require("@nestjs/common");
const user_module_1 = require("./../user/user.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [helper_module_1.HelperModule, user_module_1.UserModule],
        controllers: [authLogin_controller_1.AuthLoginController],
        providers: [auth_login_service_1.AuthLoginService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map