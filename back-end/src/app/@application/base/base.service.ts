import { InsertResult, Repository } from 'typeorm';

import { ApiErrorException } from './../errors/api-error.exception';
import { NotFoundError } from '@application/errors/notFound.error';

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
      const updatedItem = this.repository.findOne(id);
      return updatedItem;
    } catch (error) {
      if (error.code === '22P02') {
        throw new NotFoundError(' Not Found');
      } else {
        throw new ApiErrorException(error);
      }
    }
  }
}
