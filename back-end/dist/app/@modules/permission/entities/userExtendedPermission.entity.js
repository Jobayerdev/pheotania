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
exports.UserExtendedPermission = void 0;
const typeorm_1 = require("typeorm");
const base_1 = require("../../../@application/base");
const permissions_entity_1 = require("./permissions.entity");
const user_entities_1 = require("../../user/entities/user.entities");
let UserExtendedPermission = class UserExtendedPermission extends base_1.BaseEntity {
    constructor() {
        super();
    }
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entities_1.User),
    __metadata("design:type", user_entities_1.User)
], UserExtendedPermission.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => permissions_entity_1.Permission),
    __metadata("design:type", permissions_entity_1.Permission)
], UserExtendedPermission.prototype, "permission", void 0);
UserExtendedPermission = __decorate([
    (0, typeorm_1.Entity)('user_extended_permissions'),
    __metadata("design:paramtypes", [])
], UserExtendedPermission);
exports.UserExtendedPermission = UserExtendedPermission;
//# sourceMappingURL=userExtendedPermission.entity.js.map