import { ENV } from './../../../../ENV';

export class PostgressClient {
  public getPostgressConfig() {
    return {
      type: ENV.TYPEORM_CONNECTION,
      host: ENV.TYPEORM_HOST,
      port: ENV.TYPEORM_PORT,
      username: ENV.TYPEORM_USERNAME,
      password: ENV.TYPEORM_PASSWORD,
      database: ENV.TYPEORM_DATABASE,
      autoLoadEntities: ENV.TYPEROM_AUTOLOAD_ENTITIES,
      synchronize: ENV.TYPEORM_SYNCHRONIZE,
      logging: ENV.TYPEORM_LOGGING,
    } as any;
  }
}
