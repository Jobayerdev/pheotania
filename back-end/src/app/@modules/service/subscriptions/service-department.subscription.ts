import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { ServiceDepartment } from './../entities/service-department.entity';
import { ServiceDepartmentService } from '../services/service-department.service';

@EventSubscriber()
export class ServiceDepartmentSubscriber
  implements EntitySubscriberInterface<ServiceDepartment>
{
  constructor(
    connection: Connection,
    private serviceDepartmentService: ServiceDepartmentService,
  ) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return ServiceDepartment;
  }

  async beforeInsert(event: InsertEvent<ServiceDepartment>) {
    try {
      event.entity.slug = await this.serviceDepartmentService.generateSlug(
        event.entity.name,
      );
    } catch (error) {
      return error;
    }
  }
}
