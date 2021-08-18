import { ApiProperty } from '@nestjs/swagger';

export class BaseFilterDTO {
  @ApiProperty({ required: false, description: 'abc' })
  readonly searchTerm: string;

  @ApiProperty({ required: false, description: '10' })
  readonly take: number;

  @ApiProperty({ required: false, description: '1' })
  readonly page: number;
}
