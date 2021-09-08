/*
https://docs.nestjs.com/providers#services
*/

import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

import { Injectable } from '@nestjs/common';

import toStream = require('buffer-to-stream');

type T = UploadApiResponse | UploadApiErrorResponse;

@Injectable()
export class CloudinaryService {
  async uploadImage(file: any): Promise<any> {
    try {
      return await v2.uploader.upload(file, {});
    } catch (error) {
      return error;
    }
  }
}
