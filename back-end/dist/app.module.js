"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const exception_filter_1 = require("./app/@application/interceptor/exception.filter");
const appevent_module_1 = require("./app/@application/events/appevent.module");
const appointment_module_1 = require("./app/@modules/appointment/appointment.module");
const auth_module_1 = require("./app/@modules/auth/auth.module");
const common_module_1 = require("./app/@common/common.module");
const filterResponse_interceptor_1 = require("./app/@application/interceptor/filterResponse.interceptor");
const helper_module_1 = require("./app/@application/helpers/helper.module");
const permission_guard_1 = require("./app/@application/guards/permission.guard");
const permission_module_1 = require("./app/@modules/permission/permission.module");
const response_modifier_middleware_1 = require("./app/@application/middlewares/response-modifier.middleware");
const serve_static_1 = require("@nestjs/serve-static");
const service_module_1 = require("./app/@modules/service/service.module");
const user_module_1 = require("./app/@modules/user/user.module");
const utils_module_1 = require("./app/@modules/utils/utils.module");
const path_1 = require("path");
console.log(path_1.join(__dirname, '.', 'uploads'));
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(response_modifier_middleware_1.ResponseModifierMiddleware)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            appointment_module_1.AppointmentModule,
            service_module_1.ServiceModule,
            appevent_module_1.AppEventModule,
            permission_module_1.PermissionModule,
            user_module_1.UserModule,
            helper_module_1.HelperModule,
            common_module_1.CommonModule,
            auth_module_1.AuthModule,
            appevent_module_1.AppEventModule,
            utils_module_1.UtilsModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'uploads'),
                exclude: ['/api/v1/*'],
            }),
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: exception_filter_1.AllExceptionsFilter,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: filterResponse_interceptor_1.FilterResponseInterceptor,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: permission_guard_1.PermissionGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map