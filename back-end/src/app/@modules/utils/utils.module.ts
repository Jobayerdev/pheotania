import { CloudinaryModule } from './../../@common/cloudinary/cloudinary.module';
import { Image } from './entities/images.entity';
import { ImagesController } from './controllers/images.controller';
import { ImagesService } from './services/images.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/*
https://docs.nestjs.com/modules
*/

const CONTROLLERS = [ImagesController];
const SERVICES = [ImagesService];
const ENTITIES = [Image];

@Module({
  imports: [TypeOrmModule.forFeature([...ENTITIES]), CloudinaryModule],
  controllers: [...CONTROLLERS],
  providers: [...SERVICES],
  exports: [...SERVICES],
})
export class UtilsModule {}
