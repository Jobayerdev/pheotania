import { Appointment } from './entities/appointment.entity';
import { AppointmentService } from './services/appointment.service';
import { AppointmentsController } from './controllers/appointments.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/*
https://docs.nestjs.com/modules
*/

const ENTITIES = [Appointment];
const CONTROLLERS = [AppointmentsController];
const SERVICES = [AppointmentService];

@Module({
  imports: [TypeOrmModule.forFeature([...ENTITIES])],
  controllers: [...CONTROLLERS],
  providers: [...SERVICES],
})
export class AppointmentModule {}
