import { BcryptHelper, JWTHelper } from '.';

import { Module } from '@nestjs/common';

const HELPERS = [JWTHelper, BcryptHelper];

@Module({
  providers: [...HELPERS],
  exports: [...HELPERS],
})
export class HelperModule {}
