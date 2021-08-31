export interface IUser {
  id: string;
  isActive: boolean;
  phoneNumber: string;
  name: string;
  email: string;
}

export interface ICreateUser {
  name: 'string';
  email: 'string';
  phoneNumber: 'string';
  password: 'string';
}

export interface IUpdateUser {
  id: string;
  name: string;
  email: string;
}
