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
exports.UserCreatedEvent = void 0;
const ENV_1 = require("../../../../ENV");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const role_service_1 = require("../../../@modules/permission/services/role.service");
const role_user_entity_1 = require("../../../@modules/permission/entities/role-user.entity");
const role_user_service_1 = require("../../../@modules/permission/services/role-user.service");
const events_constants_1 = require("./../../constants/events.constants");
let UserCreatedEvent = class UserCreatedEvent {
    constructor(roleService, roleUserService) {
        this.roleService = roleService;
        this.roleUserService = roleUserService;
    }
    async handleUserCreatedEvent(user) {
        const basicRole = await this.roleService.getByCriteriaFromDB({ title: ENV_1.ENV.DEFAULT_USER_ROLE }, {});
        const roleUserPayload = {
            user: user,
            role: basicRole,
        };
        if (user && roleUserPayload) {
            await this.roleUserService.insertIntoDB(roleUserPayload);
        }
    }
};
__decorate([
    event_emitter_1.OnEvent(events_constants_1.USER_CREATED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserCreatedEvent.prototype, "handleUserCreatedEvent", null);
UserCreatedEvent = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [role_service_1.RoleService,
        role_user_service_1.RoleUserService])
], UserCreatedEvent);
exports.UserCreatedEvent = UserCreatedEvent;
//# sourceMappingURL=usercreated.event.js.map