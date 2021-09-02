import { BaseService } from '@application/base/base.service';
/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from '../entities/appointment.entity';

@Injectable()
export class AppointmentService extends BaseService<Appointment> {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
  ) {
    super(appointmentRepository, Appointment.name);
  }
}
