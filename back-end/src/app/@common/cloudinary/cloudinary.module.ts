import { CloudinaryProvider } from './providers/cloudinary.provider';
import { CloudinaryService } from './services/cloudinary.service';
import { Module } from '@nestjs/common';

/*
https://docs.nestjs.com/modules
*/

@Module({
  providers: [CloudinaryService, CloudinaryProvider],
  exports: [CloudinaryService, CloudinaryProvider],
})
export class CloudinaryModule {}
