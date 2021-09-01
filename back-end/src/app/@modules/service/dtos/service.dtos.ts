import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@application/base/base.dto';
import { BaseFilterDTO } from '@application/base';
import { ServiceDepartment } from './../entities/service-department.entity';

export class ServiceDTO extends BaseDTO {
  @ApiProperty({ required: true, example: 'Appliance Repair' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, example: 'description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: true, example: 'specification' })
  @IsString()
  @IsNotEmpty()
  specification: string;

  @ApiProperty({
    required: true,
    example: 'https://i.ibb.co/K6nzVXk/1583681524-tiwnn-52x52.webp',
  })
  @IsString()
  @IsNotEmpty()
  image: string;
  @ApiProperty({
    required: true,
    type: String,
    example: '35b1d8e5-913b-4b8b-813f-69614c413d3f',
  })
  @IsString()
  @IsNotEmpty()
  department: any;
}
export class GetAllServiceDTO extends BaseFilterDTO {
  @ApiProperty({
    required: false,
    description: `Example: ['name'].\n Available Options ==> ${ServiceDepartment.SEARCH_TERMS.join(
      ', ',
    )}`,
  })
  readonly selects: string;

  @ApiProperty({
    required: false,
    description: `Example: ['relationName'].\n Available Relation Options ==> ${
      ServiceDepartment.RELATIONS.length
        ? ServiceDepartment.RELATIONS.join(', ')
        : 'No Relations Available'
    }`,
  })
  readonly relations: string;

  @ApiProperty({
    required: false,
    description: `Example: ['name', 'ASC'].\n Available Order Options ==> ${ServiceDepartment.ORDERS.join(
      ' / ',
    )}`,
  })
  readonly order: string;

  @ApiProperty({ required: false, type: Boolean })
  readonly isFeatured: boolean;
}
