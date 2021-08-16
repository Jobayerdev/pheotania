import { BadRequestException } from '@nestjs/common';

export class NotFoundError extends BadRequestException {
  constructor(data: any) {
    super(data);
  }
}
