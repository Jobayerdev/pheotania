import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '0185375354' })
  readonly phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '123456' })
  readonly password: string;
}
