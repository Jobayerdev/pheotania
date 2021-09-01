import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../entities/role.entity';

export class GetRoleByIdDTO {
  @ApiProperty({
    required: false,
    description: `Example: ['title'].\n Available Options ==> ${Role.SEARCH_TERMS.join(
      ', '
    )}`,
  })
  readonly selects: string;

  @ApiProperty({
    required: false,
    description: `Example: ['relationName'].\n Available Relation Options ==> ${
      Role.RELATIONS.length
        ? Role.RELATIONS.join(', ')
        : 'No Relations Available'
    }`,
  })
  readonly relations: string;
}
