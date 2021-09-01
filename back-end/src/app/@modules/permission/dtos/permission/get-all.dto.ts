import { ApiProperty } from '@nestjs/swagger';
import { BaseFilterDTO } from '@application/base/base-filter.dto';
import { Permission } from '@modules/permission/entities/permissions.entity';

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
