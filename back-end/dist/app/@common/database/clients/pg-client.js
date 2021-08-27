"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgressClient = void 0;
const ENV_1 = require("./../../../../ENV");
class PostgressClient {
    getPostgressConfig() {
        return {
            type: ENV_1.ENV.TYPEORM_CONNECTION,
            host: ENV_1.ENV.TYPEORM_HOST,
            port: ENV_1.ENV.TYPEORM_PORT,
            username: ENV_1.ENV.TYPEORM_USERNAME,
            password: ENV_1.ENV.TYPEORM_PASSWORD,
            database: ENV_1.ENV.TYPEORM_DATABASE,
            autoLoadEntities: ENV_1.ENV.TYPEROM_AUTOLOAD_ENTITIES,
            synchronize: ENV_1.ENV.TYPEORM_SYNCHRONIZE,
            logging: ENV_1.ENV.TYPEORM_LOGGING,
        };
    }
}
exports.PostgressClient = PostgressClient;
//# sourceMappingURL=pg-client.js.map