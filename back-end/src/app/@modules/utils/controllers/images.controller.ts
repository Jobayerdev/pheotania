/*
https://docs.nestjs.com/controllers#controllers
*/

import { storageImageOptions } from '@application/utils';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ImagesService } from '../services/images.service';

@ApiTags('Image')
@Controller('images')
export class ImagesController {
  private static NAME = 'Image';

  constructor(private imageService: ImagesService) {}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('image', { storage: storageImageOptions }))
  async uploadFile(@UploadedFile() file) {
    const cData = await this.imageService.uploadImage(file);
    return {
      link: cData?.url,
    };
  }
}
