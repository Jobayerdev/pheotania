import { DatabaseModule } from './database/db.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { Module } from '@nestjs/common';

const MODULES = [DatabaseModule, EventEmitterModule.forRoot()];

@Module({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class CommonModule {}
