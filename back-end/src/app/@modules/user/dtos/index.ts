import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { BaseFilterDTO } from '@application/base';
import { User } from '../entities/user.entities';
import { UserGender } from '../enums';
import { UserType } from './../enums/index';

export class GetAllUsersDTO extends BaseFilterDTO {
  @ApiProperty({
    required: false,
    description: `Example: ['name'].\n Available Options ==> ${User.SEARCH_TERMS.join(
      ', ',
    )}`,
  })
  readonly selects: string;

  @ApiProperty({
    required: false,
    description: `Example: ['relationName'].\n Available Relation Options ==> ${
      User.RELATIONS.length
        ? User.RELATIONS.join(', ')
        : 'No Relations Available'
    }`,
  })
  readonly relations: string;

  @ApiProperty({
    required: false,
    description: `Example: ['name', 'ASC'].\n Available Order Options ==> ${User.ORDERS.join(
      ' / ',
    )}`,
  })
  readonly order: string;

  @ApiProperty({ required: false })
  readonly name: string;

  @ApiProperty({ required: false })
  readonly phoneNumber: string;

  @ApiProperty({
    required: false,
    description: `${UserType.Admin}/${UserType.Customer}`,
  })
  @IsIn([UserType.Admin, UserType.Customer])
  @IsOptional()
  type: UserType;
}

export class UserUpdateDTO {
  @ApiProperty({ required: false, example: 'Jobayer Hossain' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ required: false, example: 'Jobayerhossain977@gmail.com' })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ required: false, example: '01853753854' })
  @IsNotEmpty()
  readonly phoneNumber: string;

  @ApiProperty({
    required: false,
    description: `${UserType.Admin}/${UserType.Customer}`,
    example: UserType.Admin,
  })
  @IsIn([UserType.Admin, UserType.Customer])
  @IsOptional()
  type: UserType;

  @ApiProperty({ required: false, example: 'MALE' })
  @IsNotEmpty()
  @IsIn([UserGender.Male, UserGender.Female])
  readonly gender: string;

  @ApiProperty({ required: false, example: '6 North Kafrul Dhaka' })
  @IsNotEmpty()
  readonly address: string;
}
export class GetUserByIdDTO {
  @ApiProperty({
    required: false,
    description: `Example: ['name'].\n Available Options ==> ${User.SEARCH_TERMS.join(
      ', ',
    )}`,
  })
  readonly selects: string;

  @ApiProperty({
    required: false,
    description: `Example: ['relationName'].\n Available Relation Options ==> ${
      User.RELATIONS.length
        ? User.RELATIONS.join(', ')
        : 'No Relations Available'
    }`,
  })
  readonly relations: string;
}

export class CreateUserDTO {
  @ApiProperty({ required: true, example: 'Jobayer Hossain' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ required: true, example: '0185375354' })
  @IsNotEmpty()
  readonly phoneNumber: string;

  @ApiProperty({ required: true, example: '123456' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({
    required: true,
    example: UserType.Customer,
    description: `${UserType.Admin}/${UserType.Customer}`,
  })
  @IsNotEmpty()
  @IsIn([UserType.Admin, UserType.Customer])
  type: UserType;
}
