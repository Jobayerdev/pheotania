import { DatabaseModule } from './database/db.module';
import { Module } from '@nestjs/common';

const MODULES = [DatabaseModule];

@Module({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class CommonModule {}
