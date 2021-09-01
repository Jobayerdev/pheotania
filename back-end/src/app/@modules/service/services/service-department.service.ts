import { BaseService } from '@application/base/base.service';
import { getRandomString } from '@application/utils';
/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceDepartment } from '../entities/service-department.entity';

@Injectable()
export class ServiceDepartmentService extends BaseService<ServiceDepartment> {
  constructor(
    @InjectRepository(ServiceDepartment)
    private departmentRepository: Repository<ServiceDepartment>,
  ) {
    super(departmentRepository, ServiceDepartment.name);
  }

  async generateSlug(name: string) {
    try {
      const slugGenerate = async (): Promise<any> => {
        const promise = new Promise(async (resolve, reject) => {
          let generatedSlug: string = `${name
            .split(' ')
            .join('-')
            .toLowerCase()}-${getRandomString(2)}`;
          const existSlugCode = await this.getByCriteriaFromDB(
            { slug: generatedSlug } as any,
            {},
          );
          if (existSlugCode) {
            resolve(false);
          } else {
            resolve(generatedSlug);
          }
        });

        if ((await promise) === false) {
          slugGenerate();
        } else {
          return await promise;
        }
      };

      return await slugGenerate();
    } catch (error) {
      return error;
    }
  }
}
