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
exports.RoleService = void 0;
const base_1 = require("../../../@application/base");
const base_interfaces_1 = require("../../../@application/interfaces/base.interfaces");
const utils_1 = require("../../../@application/utils");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./../entities/role.entity");
const role_user_service_1 = require("./role-user.service");
let RoleService = class RoleService extends base_1.BaseService {
    constructor(roleRepository, userRoleService) {
        super(roleRepository, role_entity_1.Role.name);
        this.roleRepository = roleRepository;
        this.userRoleService = userRoleService;
    }
    async getUserRoles(userId) {
        const userRoles = await this.userRoleService.getAllFromDB({ user: userId }, { relations: ['role'] });
        const roles = userRoles.data.map((uP) => uP.role.title);
        return roles;
    }
    async addUserRoles(userId, payload) {
        const userRoles = [];
        await utils_1.asyncForEach(payload.roles, async (r) => {
            const t = {
                user: userId,
                role: r,
            };
            userRoles.push(t);
        });
        await this.userRoleService.bulkInsertIntoDB(userRoles);
        return this.getUserRoles(userId);
    }
    async removeUserRoles(userId, payload) {
        await utils_1.asyncForEach(payload.roles, async (r) => {
            await this.userRoleService.deleteByCriteriaFromDB({
                user: userId,
                role: r,
            });
        });
        return this.getUserRoles(userId);
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        role_user_service_1.RoleUserService])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map