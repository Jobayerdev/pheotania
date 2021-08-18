import { ApiProperty } from '@nestjs/swagger';

export class FilterServiceDTO {
  @ApiProperty({ example: 'Anything', required: false })
  searchTerm: string;

  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 10 })
  take: number;
}
