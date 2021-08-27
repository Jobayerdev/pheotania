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
exports.GetAllPermissionsDTO = exports.PermissionDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const base_1 = require("../../../@application/base");
const permissions_entity_1 = require("../entities/permissions.entity");
class PermissionDTO {
}
__decorate([
    swagger_1.ApiProperty({ required: true, example: 'string' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PermissionDTO.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: '7cd3dc24-d6b9-41a5-9829-1275f48d5dca',
        type: String,
    }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], PermissionDTO.prototype, "permissionType", void 0);
exports.PermissionDTO = PermissionDTO;
class GetAllPermissionsDTO extends base_1.BaseFilterDTO {
}
__decorate([
    swagger_1.ApiProperty({
        required: false,
        description: `Example: ['title'].\n Available Options ==> ${permissions_entity_1.Permission.SEARCH_TERMS.join(', ')}`,
    }),
    __metadata("design:type", String)
], GetAllPermissionsDTO.prototype, "selects", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        description: `Example: ['relationName'].\n Available Relation Options ==> ${permissions_entity_1.Permission.RELATIONS.length
            ? permissions_entity_1.Permission.RELATIONS.join(', ')
            : 'No Relations Available'}`,
    }),
    __metadata("design:type", String)
], GetAllPermissionsDTO.prototype, "relations", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        description: `Example: ['name', 'ASC'].\n Available Order Options ==> ${permissions_entity_1.Permission.ORDERS.join(' / ')}`,
    }),
    __metadata("design:type", String)
], GetAllPermissionsDTO.prototype, "order", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", String)
], GetAllPermissionsDTO.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false, type: String }),
    __metadata("design:type", Object)
], GetAllPermissionsDTO.prototype, "permissionType", void 0);
exports.GetAllPermissionsDTO = GetAllPermissionsDTO;
//# sourceMappingURL=permission.dots.js.map