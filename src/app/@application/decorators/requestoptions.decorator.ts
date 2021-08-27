import { IOptions } from '@application/interfaces/base.interfaces';
import { createParamDecorator } from '@nestjs/common';

export const RequestOptions = createParamDecorator((data, req): IOptions => {
  return req.args[0].reqOptions;
});
