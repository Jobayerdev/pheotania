import {
  FindManyOptions,
  FindOneOptions,
  InsertResult,
  Repository,
} from 'typeorm';
import {
  IGetAllFromDBResponse,
  IMessageOnlyResponse,
  IOptions,
  ISelectOptions,
} from '@application/interfaces/base.interfaces';
import {
  createTypeORMFindManyOptions,
  createTypeORMFindOneOptions,
} from './../utils/service.utils';

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
      return this.repository.findOne(result.identifiers[0].id).catch((err) => {
        throw new Error(err);
      });
    } catch (error) {
      return error;
    }
  }
  async bulkInsertIntoDB(payload: Entity[]): Promise<IMessageOnlyResponse> {
    try {
      const result: InsertResult = await this.repository.insert(payload);
      return {
        message: `${this.entityName} data bulk insert success`,
        ids: result.identifiers,
      };
    } catch (error) {
      return error;
    }
  }

  async updateIntoDB(id: string, payload: Entity): Promise<Entity> {
    try {
      await this.repository.update(id, payload);
      return this.repository.findOne(id).catch((err) => {
        throw new Error(err);
      });
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
      return { message: `${this.entityName} data successfully deleted`, id };
    } catch (error) {
      return error;
    }
  }

  async deleteByCriteriaFromDB(
    entity: Entity | Entity[],
  ): Promise<IMessageOnlyResponse> {
    try {
      await this.repository.delete(entity).catch((err) => {
        throw new Error(err?.name);
      });
      return { message: `${this.entityName} data successfully deleted` };
    } catch (error) {
      return error;
    }
  }
  async getByIdFromDB(
    id: string,
    options: ISelectOptions = {},
  ): Promise<Entity> {
    try {
      const payload = await this.repository
        .findOne(id, { relations: options.relations })
        .catch((err) => {
          throw new Error(err?.name);
        });
      if (!payload) {
        throw new NotFoundException(`Not Found with ${id}`);
      }
      return payload;
    } catch (error) {
      return error;
    }
  }

  async getByCriteriaFromDB(
    criteria: Entity,
    options: IOptions,
  ): Promise<Entity> {
    try {
      const opt: FindOneOptions = await createTypeORMFindOneOptions(
        criteria,
        options,
        this.entityName,
      );
      const entity = await this.repository.findOne(opt).catch((err) => {
        throw new Error(err);
      });
      return entity;
    } catch (error) {
      return error;
    }
  }

  async getAllFromDB(
    filters: Entity,
    options: IOptions,
  ): Promise<IGetAllFromDBResponse<Entity>> {
    try {
      const result = { data: null, total: 0 };
      if (options.single) {
        const opts: FindOneOptions = await createTypeORMFindOneOptions(
          filters,
          options,
          this.entityName,
        );

        result.data = await this.repository.findOne(opts).catch((err) => {
          throw new Error(err?.name);
        });
      } else {
        const opts: FindManyOptions = await createTypeORMFindManyOptions(
          filters,
          options,
          this.entityName,
        );

        const res = await this.repository.findAndCount(opts).catch((err) => {
          throw new Error(err?.name);
        });

        if (res.length === 2) {
          result.data = res[0];
          result.total = res[1];
        }
      }

      return result;
    } catch (error) {
      return error;
    }
  }
}
