"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const ENV_1 = require("./ENV");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({ origin: '*' });
    app.setGlobalPrefix(ENV_1.ENV.API_PREFIX);
    app.useGlobalPipes(new common_1.ValidationPipe({}));
    const options = new swagger_1.DocumentBuilder()
        .setTitle(ENV_1.ENV.API_TITLE)
        .setDescription(ENV_1.ENV.API_DESC)
        .setVersion(ENV_1.ENV.API_VERSION)
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    app.use(helmet_1.default());
    swagger_1.SwaggerModule.setup('/docs', app, document);
    console.log(ENV_1.ENV);
    await app.listen(process.env.PORT || ENV_1.ENV.port);
}
bootstrap();
//# sourceMappingURL=main.js.map