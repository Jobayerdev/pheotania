import { ApiProperty } from '@nestjs/swagger';
import { Permission } from '@modules/permission/entities/permissions.entity';

export class GetPermissionByIdDTO {
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
}
