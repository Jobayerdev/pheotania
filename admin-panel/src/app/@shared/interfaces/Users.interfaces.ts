export interface IUser {
  id?: string;
  isActive?: boolean;
  phoneNumber?: string;
  name?: string;
  email?: string;
}

export interface ICreateUser {
  name?: string;
  phoneNumber?: string;
  password?: string;
  type?: string;
}

export interface IUpdateUser {
  name?: string;
  email?: string;
  phoneNumber?: string;
  type?: string;
  gender?: string;
  address?: string;
}
