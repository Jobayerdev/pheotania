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
exports.RoleController = void 0;
const base_interfaces_1 = require("../../../@application/interfaces/base.interfaces");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const add_user_role_dto_1 = require("../dtos/role/add-user-role.dto");
const insert_dto_1 = require("../dtos/role/insert.dto");
const remove_user_role_dto_1 = require("../dtos/role/remove-user-role.dto");
const update_dto_1 = require("../dtos/role/update.dto");
const requestoptions_decorator_1 = require("./../../../@application/decorators/requestoptions.decorator");
const get_all_dto_1 = require("./../dtos/role/get-all.dto");
const role_service_1 = require("./../services/role.service");
let RoleController = class RoleController {
    constructor(service) {
        this.service = service;
    }
    async getAll(reqOptions, reqPayloads) {
        return this.service.getAllFromDB(reqPayloads, reqOptions);
    }
    async getUserRoles(userId) {
        return this.service.getUserRoles(userId);
    }
    async addUserRoles(userId, payload) {
        return this.service.addUserRoles(userId, payload);
    }
    create(createRoleDTO) {
        return this.service.insertIntoDB(createRoleDTO);
    }
    async removeUserRoles(userId, payload) {
        return this.service.removeUserRoles(userId, payload);
    }
    update(createRoleDTO, id) {
        return this.service.updateIntoDB(id, createRoleDTO);
    }
    delete(id) {
        return this.service.deleteFromDB(id);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiProperty({ example: get_all_dto_1.GetAllRolesDTO }),
    __param(0, requestoptions_decorator_1.RequestOptions()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_all_dto_1.GetAllRolesDTO]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getAll", null);
__decorate([
    common_1.Get('user-roles/:userId'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getUserRoles", null);
__decorate([
    common_1.Post('user-roles/:userId'),
    __param(0, common_1.Param('userId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_user_role_dto_1.AddUserRoleDTO]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "addUserRoles", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiBody({ type: insert_dto_1.CreateRoleDTO }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insert_dto_1.CreateRoleDTO]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "create", null);
__decorate([
    common_1.Delete('user-roles/:userId'),
    __param(0, common_1.Param('userId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, remove_user_role_dto_1.RemoveUserRoleDTO]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "removeUserRoles", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiBody({ type: update_dto_1.RoleUpdateDTO }),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.RoleUpdateDTO, String]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "delete", null);
RoleController = __decorate([
    swagger_1.ApiTags('Role'),
    common_1.Controller('roles'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map