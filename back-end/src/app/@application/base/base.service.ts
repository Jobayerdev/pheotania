import { InsertResult, Repository } from 'typeorm';

import { ApiErrorException } from '../exceptions/api-error.exception';
import { ILIKE } from './../utils/util-functions';
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

  async deleteFromDB(id: string): Promise<any> {
    try {
      const find = await this.repository.findOne(id);
      if (!find) {
        throw new Error('Not Found');
      }
      await this.repository.delete(id);
      return find;
    } catch (error) {
      return error;
    }
  }

  async getByIdFromDB(id: string) {
    const find = await this.repository.findOne(id);
    if (!find) {
      throw new Error('Not Found');
    }
    return find;
  }

  async getAllFromDB(options: any): Promise<any> {
    try {
      const result: any = await this.repository.findAndCount({
        where: [
          {
            name: ILIKE(options.searchTerm),
          },
        ],
        // select: JSON.parse(options.selects),
      });
      return options;
    } catch (error) {
      return error;
    }
  }
}
