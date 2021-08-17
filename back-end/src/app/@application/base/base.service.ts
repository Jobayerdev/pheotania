import { InsertResult, Repository } from 'typeorm';

import { ApiErrorException } from '../exceptions/api-error.exception';
import { NotFoundException } from '@nestjs/common';

export abstract class BaseService<Entity> extends Repository<Entity> {
  repository: Repository<Entity>;
  entityName: string;

  constructor(repository: Repository<Entity>, entityName: string) {
    super();
    this.repository = repository;
    this.entityName = entityName;
  }

  async insertIntoDB(payload: Entity): Promise<Entity> {
    try {
      const result: InsertResult = await this.repository.insert(payload);
      return this.repository.findOne(result.identifiers[0].id);
    } catch (error) {
      throw new ApiErrorException(error);
    }
  }

  async updateIntoDB(id: string, payload: Entity): Promise<Entity> {
    try {
      await this.repository.update(id, payload);
      const updatedItem = await this.repository.findOne(id);
      if (!updatedItem) {
        throw new NotFoundException('Not Found');
      }
      return updatedItem;
    } catch (error) {
      return error;
    }
  }
}
