import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ENV } from './ENV';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(ENV.API_PREFIX);
  app.useGlobalPipes(new ValidationPipe({}));
  const options = new DocumentBuilder()
    .setTitle(ENV.API_TITLE)
    .setDescription(ENV.API_DESC)
    .setVersion(ENV.API_VERSION)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(process.env.PORT || ENV.port);
}
bootstrap();
