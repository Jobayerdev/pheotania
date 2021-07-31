import { Module } from '@nestjs/common';
import { PostgressClient } from './clients/pg-client';
import { TypeOrmModule } from '@nestjs/typeorm';

const pg = new PostgressClient().getPostgressConfig();

@Module({
  imports: [TypeOrmModule.forRoot(pg)],
})
export class DatabaseModule {}
