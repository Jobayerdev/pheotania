"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppPermissionTypes = exports.RequestMethods = exports.OrderOptions = void 0;
var OrderOptions;
(function (OrderOptions) {
    OrderOptions["ASC"] = "ASC";
    OrderOptions["DESC"] = "DESC";
})(OrderOptions = exports.OrderOptions || (exports.OrderOptions = {}));
var RequestMethods;
(function (RequestMethods) {
    RequestMethods["GET"] = "GET";
    RequestMethods["POST"] = "POST";
    RequestMethods["PUT"] = "PUT";
    RequestMethods["PATCH"] = "PATCH";
    RequestMethods["DELETE"] = "DELETE";
})(RequestMethods = exports.RequestMethods || (exports.RequestMethods = {}));
var AppPermissionTypes;
(function (AppPermissionTypes) {
    AppPermissionTypes["VIEW"] = "View";
    AppPermissionTypes["CREATE"] = "Create";
    AppPermissionTypes["MODIFY"] = "Modify";
    AppPermissionTypes["DELETE"] = "Delete";
})(AppPermissionTypes = exports.AppPermissionTypes || (exports.AppPermissionTypes = {}));
//# sourceMappingURL=base.enums.js.map