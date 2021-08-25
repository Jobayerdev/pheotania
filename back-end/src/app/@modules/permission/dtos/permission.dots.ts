import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { BaseFilterDTO } from '@application/base';
import { Permission } from '../entities/permissions.entity';

export class PermissionDTO {
  @ApiProperty({ required: true, example: 'string' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    required: true,
    example: '7cd3dc24-d6b9-41a5-9829-1275f48d5dca',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  permissionType: any;
}
export class GetAllPermissionsDTO extends BaseFilterDTO {
  @ApiProperty({
    required: false,
    description: `Example: ['title'].\n Available Options ==> ${Permission.SEARCH_TERMS.join(
      ', ',
    )}`,
  })
  readonly selects: string;

  @ApiProperty({
    required: false,
    description: `Example: ['relationName'].\n Available Relation Options ==> ${
      Permission.RELATIONS.length
        ? Permission.RELATIONS.join(', ')
        : 'No Relations Available'
    }`,
  })
  readonly relations: string;

  @ApiProperty({
    required: false,
    description: `Example: ['name', 'ASC'].\n Available Order Options ==> ${Permission.ORDERS.join(
      ' / ',
    )}`,
  })
  readonly order: string;

  @ApiProperty({ required: false })
  readonly title: string;

  @ApiProperty({ required: false, type: String })
  readonly permissionType: any;
}
