import { RequestOptions } from '@application/decorators/requestoptions.decorator';
import {
  IGetAllFromDBResponse,
  IMessageOnlyResponse,
  IOptions,
} from '@application/interfaces/base.interfaces';
import { GetAllUsersDTO, GetUserByIdDTO } from '@modules/user/dtos';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { AppointmentDTO, GetAllAppointmentDTO } from '../dtos/appointment.dtos';
import { Appointment } from '../entities/appointment.entity';
/*
https://docs.nestjs.com/controllers#controllers
*/
import { AppointmentService } from '../services/appointment.service';

@ApiTags('Appointment')
@Controller('appointment')
export class AppointmentsController {
  constructor(private service: AppointmentService) {}
  @Get()
  @ApiProperty({ type: GetAllUsersDTO })
  async getAll(
    @RequestOptions() reqOptions: IOptions,
    @Query() reqPayloads: GetAllAppointmentDTO,
  ): Promise<IGetAllFromDBResponse<Appointment>> {
    return this.service.getAllFromDB(reqPayloads, reqOptions);
  }

  @Get(':id')
  @ApiProperty({ type: GetUserByIdDTO })
  async getById(@Param('id') id: string): Promise<Appointment> {
    return this.service.getByIdFromDB(id);
  }

  @Post()
  @ApiBody({ type: AppointmentDTO })
  async insert(
    @RequestOptions() reqOptions: IOptions,
    @Body() reqPayloads: AppointmentDTO,
  ): Promise<Appointment> {
    return this.service.insertIntoDB(reqPayloads);
  }

  @Put(':id')
  @ApiBody({ type: AppointmentDTO })
  async update(
    @Param('id') id: string,
    @Body() reqPayloads: AppointmentDTO,
  ): Promise<Appointment> {
    return this.service.updateIntoDB(id, reqPayloads);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<IMessageOnlyResponse> {
    return this.service.deleteFromDB(id);
  }
}
