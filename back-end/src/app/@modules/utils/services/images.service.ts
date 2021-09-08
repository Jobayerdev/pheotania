import { CloudinaryService } from '@common/cloudinary/services/cloudinary.service';
import { Injectable } from '@nestjs/common';

/*
https://docs.nestjs.com/providers#services
*/

@Injectable()
export class ImagesService {
  constructor(private cloudinaryService: CloudinaryService) {}

  async uploadImage(file: any) {
    try {
      return await this.cloudinaryService.uploadImage(file.path);
    } catch (error) {
      return error;
    }
  }
}
