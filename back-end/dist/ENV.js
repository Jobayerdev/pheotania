"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = exports.ENV_STAGING = exports.ENV_PRODUCTION = exports.ENV_DEVELOPMENT = void 0;
const path = require("path");
const dotenv_1 = require("dotenv");
const utils_1 = require("./app/@application/utils");
dotenv_1.config({
    path: path.join(process.cwd(), 'environments', `${process.env.NODE_ENV || 'development'}.env`),
});
exports.ENV_DEVELOPMENT = 'development';
exports.ENV_PRODUCTION = 'production';
exports.ENV_STAGING = 'staging';
exports.ENV = {
    port: +process.env.PORT,
    API_PREFIX: process.env.API_PREFIX,
    API_TITLE: process.env.API_TITLE,
    API_DESC: process.env.API_DESC,
    API_VERSION: process.env.API_VERSION,
    APP_QUEUE: process.env.APP_QUEUE,
    TYPEORM_CONNECTION: process.env.TYPEORM_CONNECTION,
    TYPEORM_HOST: process.env.TYPEORM_HOST,
    TYPEORM_PORT: process.env.TYPEORM_PORT,
    TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
    TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
    TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
    TYPEORM_SYNCHRONIZE: process.env.TYPEORM_SYNCHRONIZE,
    TYPEORM_LOGGING: process.env.TYPEORM_LOGGING,
    TYPEROM_AUTOLOAD_ENTITIES: process.env.TYPEROM_AUTOLOAD_ENTITIES,
    JWT_SECRET: process.env.JWT_SECRET,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
    EXPIRES_IN: process.env.EXPIRES_IN,
    DEFAULT_USER_ROLE: process.env.DEFAULT_USER_ROLE,
    UPLOAD_BASE_PUBLIC_PATH: process.env.UPLOAD_BASE_PUBLIC_PATH,
    CN_CLOUD_NAME: process.env.CN_CLOUD_NAME,
    CN_API_KEY: process.env.CN_API_KEY,
    CN_API_SECRET: process.env.CN_API_SECRET,
    CN_ENHANCE_IMAGE_TAG: utils_1.toBool(process.env.CN_ENHANCE_IMAGE_TAG),
    CN_STATIC_FILE_SUPPORT: utils_1.toBool(process.env.CN_STATIC_FILE_SUPPORT),
};
//# sourceMappingURL=ENV.js.map