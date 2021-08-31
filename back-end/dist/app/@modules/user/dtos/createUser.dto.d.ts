import { UserType } from './../enums/index';
export declare class CreateUserDTO {
    readonly name: string;
    readonly phoneNumber: string;
    readonly password: string;
    type: UserType;
}
