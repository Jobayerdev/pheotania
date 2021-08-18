export interface IOptions {
  skip?: number;
  searchTerm?: string;
  selects?: string[];
  take?: number;
  page?: number;
}
export interface IOrderOption {
  propertyName: string;
  option: OrderOptions;
}
export enum OrderOptions {
  ASC = 'ASC',
  DESC = 'DESC',
}
