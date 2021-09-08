/*
https://docs.nestjs.com/openapi/decorators#decorators
*/

import { SetMetadata } from '@nestjs/common';

export const PermissionFor = (...permissions: string[]) => {
  return SetMetadata('permissions', permissions);
};
