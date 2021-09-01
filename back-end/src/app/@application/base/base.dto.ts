import { IsBoolean, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class BaseDTO {
  @ApiProperty({ type: Boolean, required: true })
  @IsNotEmpty()
  @IsBoolean()
  isActive?: boolean;
}
