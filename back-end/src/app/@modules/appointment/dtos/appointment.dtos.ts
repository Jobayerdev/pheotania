import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Appointment } from '../entities/appointment.entity';
import { BaseDTO } from '@application/base/base.dto';
import { BaseFilterDTO } from '@application/base';

export class GetAllAppointmentDTO extends BaseFilterDTO {
  @ApiProperty({
    required: false,
    description: `Example: ['name'].\n Available Options ==> ${Appointment.SEARCH_TERMS.join(
      ', ',
    )}`,
  })
  readonly selects: string;

  @ApiProperty({
    required: false,
    description: `Example: ['relationName'].\n Available Relation Options ==> ${
      Appointment.RELATIONS.length
        ? Appointment.RELATIONS.join(', ')
        : 'No Relations Available'
    }`,
  })
  readonly relations: string;

  @ApiProperty({
    required: false,
    description: `Example: ['name', 'ASC'].\n Available Order Options ==> ${Appointment.ORDERS.join(
      ' / ',
    )}`,
  })
  readonly order: string;

  @ApiProperty({ required: false, type: Boolean })
  readonly isFeatured: boolean;
}
export class AppointmentDTO extends BaseDTO {
  @ApiProperty({ required: true, example: 'Appliance Repair' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, example: '01973753854' })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({ required: true, example: 'description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: true, example: '6 North Kfarul Dhaka' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ required: true, example: 'jobayerhossain977@gmail.com' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, example: '10/10/2021' })
  @IsString()
  @IsNotEmpty()
  schedule: string;

  @ApiProperty({
    required: true,
    example: ['f90cb141-cf06-4f7e-b8af-9501646b76e2'],
  })
  @IsNotEmpty()
  services: any;
}
