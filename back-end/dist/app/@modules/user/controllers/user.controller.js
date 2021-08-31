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
exports.UserController = void 0;
const requestoptions_decorator_1 = require("../../../@application/decorators/requestoptions.decorator");
const base_interfaces_1 = require("../../../@application/interfaces/base.interfaces");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const index_1 = require("./../dtos/index");
const user_service_1 = require("./../services/user.service");
let UserController = class UserController {
    constructor(service) {
        this.service = service;
    }
    async getAll(reqOptions, reqPayloads) {
        return this.service.getAllFromDB(reqPayloads, reqOptions);
    }
    async getById(id) {
        return this.service.getByIdFromDB(id);
    }
    async insert(reqOptions, reqPayloads) {
        return this.service.createUser(reqPayloads);
    }
    async update(id, reqPayloads) {
        return this.service.updateIntoDB(id, reqPayloads);
    }
    async delete(id) {
        return this.service.deleteFromDB(id);
    }
};
UserController.NAME = 'User';
__decorate([
    common_1.Get(),
    swagger_1.ApiProperty({ type: index_1.GetAllUsersDTO }),
    __param(0, requestoptions_decorator_1.RequestOptions()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, index_1.GetAllUsersDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiProperty({ type: index_1.GetUserByIdDTO }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getById", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiBody({ type: index_1.CreateUserDTO }),
    __param(0, requestoptions_decorator_1.RequestOptions()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, index_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "insert", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, index_1.UserUpdateDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = __decorate([
    swagger_1.ApiTags('User'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map