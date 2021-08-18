import { ApiProperty } from '@nestjs/swagger';
import { BaseFilterDTO } from '@application/base/base-filter.dto';
import { Service } from './../entities/service.entities';

export class GetAllServiceDTO extends BaseFilterDTO {
  @ApiProperty({
    required: false,
    description: `Example: ['name'].\n Available Options ===> ${Service.SEARCH_TERMS.join(
      ', ',
    )}`,
  })
  readonly selects?: string;

  // @ApiProperty({
  //   required: false,
  //   description: `Example: ['relationName'].\n Available Relation Options ==> ${
  //     Service.RELATIONS.length
  //       ? Service.RELATIONS.join(', ')
  //       : 'No Relations Available'
  //   }`,
  // })
  // readonly relations: string;

  // @ApiProperty({
  //   required: false,
  //   description: `Example: ['name', 'ASC'].\n Available Order Options ==> ${Service.ORDERS.join(
  //     ' / ',
  //   )}`,
  // })
  // readonly order: string;

  // @ApiProperty({ required: false })
  // readonly name: string;
}
