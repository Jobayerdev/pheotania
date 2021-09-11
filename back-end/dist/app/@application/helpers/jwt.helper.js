"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTHelper = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const ENV_1 = require("./../../../ENV");
const JWT_SECRET = ENV_1.ENV.JWT_SECRET;
class JWTHelper {
    async sign(payload, options) {
        return (0, jsonwebtoken_1.sign)(payload, JWT_SECRET, options);
    }
    async verify(token) {
        return (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
    }
    async makeAccessToken(data) {
        const configAccess = {
            payload: Object.assign({}, data),
            options: {
                algorithm: 'HS512',
                expiresIn: ENV_1.ENV.EXPIRES_IN,
            },
        };
        const token = await this.sign(configAccess.payload, configAccess.options);
        const tokenData = (0, jsonwebtoken_1.decode)(token);
        const exp = tokenData.exp;
        return { token, exp };
    }
    async makePermissionToken(permissions) {
        const configAccess = {
            payload: { permissions },
            options: {
                algorithm: 'HS512',
                expiresIn: ENV_1.ENV.EXPIRES_IN,
            },
        };
        const token = await this.sign(configAccess.payload, configAccess.options);
        return token;
    }
}
exports.JWTHelper = JWTHelper;
//# sourceMappingURL=jwt.helper.js.map