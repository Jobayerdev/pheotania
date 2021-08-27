"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModifierMiddleware = void 0;
const common_1 = require("@nestjs/common");
const base_interfaces_1 = require("../interfaces/base.interfaces");
const enums_1 = require("../enums");
let ResponseModifierMiddleware = class ResponseModifierMiddleware {
    use(req, res, next) {
        const options = [];
        const reqOptions = {};
        let _req = {};
        if (req.method === enums_1.RequestMethods.GET) {
            _req = req.query;
        }
        else if (req.method === enums_1.RequestMethods.POST || enums_1.RequestMethods.PUT) {
            _req = req.body;
        }
        if (_req.searchTerm) {
            reqOptions.searchTerm = String(_req.searchTerm).trim();
            options.push('searchTerm');
        }
        if (_req.selects) {
            try {
                reqOptions.selects = eval(_req.selects);
                reqOptions.selects.splice(0, 0, 'id');
                options.push('selects');
            }
            catch (error) {
                delete _req.selects;
                throw new Error('Invalid Selects');
            }
        }
        if (_req.take) {
            try {
                reqOptions.take = Number(_req.take);
                if (isNaN(_req.take)) {
                    delete _req.take;
                    throw new Error('Take have to be number');
                }
                else {
                    options.push('take');
                }
            }
            catch (error) {
                delete _req.take;
                throw new Error('Take have to be number');
            }
        }
        if (_req.page) {
            try {
                reqOptions.page = Number(_req.page);
                if (isNaN(_req.page)) {
                    delete _req.page;
                    throw new Error('page have to be number');
                }
                else {
                    options.push('page');
                }
            }
            catch (error) {
                delete _req.page;
                throw new Error('page have to be number');
            }
        }
        if (!_req.take || !_req.page) {
            reqOptions.take = 10;
            reqOptions.skip = 0;
        }
        if (_req.take && _req.page) {
            reqOptions.skip = _req.page === 1 ? 0 : (_req.page - 1) * _req.take;
            reqOptions.page = Number(_req.page);
        }
        req.reqOptions = reqOptions;
        next();
    }
};
ResponseModifierMiddleware = __decorate([
    common_1.Injectable()
], ResponseModifierMiddleware);
exports.ResponseModifierMiddleware = ResponseModifierMiddleware;
//# sourceMappingURL=response-modifier.middleware.js.map