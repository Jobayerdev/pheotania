import { ApiProperty } from '@nestjs/swagger';

export class RoleBulkUpdateDTO {
  @ApiProperty({ required: true, example: ['id1', 'id2'] })
  readonly ids: string[];

  @ApiProperty({ required: false })
  readonly title: string;
}
