import { ApiProperty } from '@nestjs/swagger';

export class RoleUpdateDTO {
  @ApiProperty({ required: false })
  readonly title: string;
}
