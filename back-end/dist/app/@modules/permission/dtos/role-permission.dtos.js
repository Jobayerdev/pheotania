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
exports.RolePermissionDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class RolePermissionDTO {
}
__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: '8e6e9d80-3b51-4228-a4ae-ed4044b141f1',
        type: String,
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RolePermissionDTO.prototype, "role", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: '9fec078f-6526-41c2-bfe2-ec3fe23ca559',
        type: String,
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], RolePermissionDTO.prototype, "permission", void 0);
exports.RolePermissionDTO = RolePermissionDTO;
//# sourceMappingURL=role-permission.dtos.js.map