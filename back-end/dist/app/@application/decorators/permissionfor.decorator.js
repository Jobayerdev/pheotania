"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionFor = void 0;
const common_1 = require("@nestjs/common");
const PermissionFor = (...permissions) => {
    console.log(permissions);
    return common_1.SetMetadata('permissions', permissions);
};
exports.PermissionFor = PermissionFor;
//# sourceMappingURL=permissionfor.decorator.js.map