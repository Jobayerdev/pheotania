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
exports.PermissionController = void 0;
const requestoptions_decorator_1 = require("../../../@application/decorators/requestoptions.decorator");
const base_interfaces_1 = require("../../../@application/interfaces/base.interfaces");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const add_user_permission_dto_1 = require("../dtos/permission/add-user-permission.dto");
const get_all_dto_1 = require("../dtos/permission/get-all.dto");
const insert_dto_1 = require("../dtos/permission/insert.dto");
const remove_user_permission_dto_1 = require("../dtos/permission/remove-user-permission.dto");
const update_dto_1 = require("../dtos/permission/update.dto");
const permission_service_1 = require("../services/permission.service");
let PermissionController = class PermissionController {
    constructor(service) {
        this.service = service;
    }
    async getUserPermission(userId) {
        return this.service.getUserPermissions(userId);
    }
    get(reqOptions, reqPayload) {
        return this.service.getAllFromDB(reqPayload, reqOptions);
    }
    create(data) {
        return this.service.insertIntoDB(data);
    }
    update(data, id) {
        return this.service.updateIntoDB(id, data);
    }
    delete(id) {
        return this.service.deleteFromDB(id);
    }
    async addUserExtendedPermissions(userId, payload) {
        return this.service.addUserExtendedPermissions(userId, payload);
    }
    async removeUserExtendedPermissions(userId, payload) {
        return this.service.removeUserExtendedPermissions(userId, payload);
    }
};
__decorate([
    common_1.Get('user-permissions/:userId'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "getUserPermission", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiProperty({ type: get_all_dto_1.GetAllPermissionsDTO }),
    __param(0, requestoptions_decorator_1.RequestOptions()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_all_dto_1.GetAllPermissionsDTO]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "get", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiBody({ type: insert_dto_1.CreatePermissionDTO }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insert_dto_1.CreatePermissionDTO]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiBody({ type: update_dto_1.PermissionUpdateDTO }),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.PermissionUpdateDTO, String]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "delete", null);
__decorate([
    common_1.Post('user-extended-permissions/:userId'),
    __param(0, common_1.Param('userId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_user_permission_dto_1.AddUserExtendedPermissionDTO]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "addUserExtendedPermissions", null);
__decorate([
    common_1.Delete('user-extended-permissions/:userId'),
    __param(0, common_1.Param('userId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, remove_user_permission_dto_1.RemoveUserExtendedPermissionDTO]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "removeUserExtendedPermissions", null);
PermissionController = __decorate([
    swagger_1.ApiTags('Permissions'),
    common_1.Controller('permissions'),
    __metadata("design:paramtypes", [permission_service_1.PermissionService])
], PermissionController);
exports.PermissionController = PermissionController;
//# sourceMappingURL=permission.controller.js.map