import { ApiProperty } from '@nestjs/swagger';
import { PermissionType } from '../../entities/permissionType.entity';

export class GetPermissionTypeByIdDTO {
  @ApiProperty({
    required: false,
    description: `Example: ['title'].\n Available Options ==> ${PermissionType.SEARCH_TERMS.join(
      ', '
    )}`,
  })
  readonly selects: string;

  @ApiProperty({
    required: false,
    description: `Example: ['relationName'].\n Available Relation Options ==> ${
      PermissionType.RELATIONS.length
        ? PermissionType.RELATIONS.join(', ')
        : 'No Relations Available'
    }`,
  })
  readonly relations: string;
}
