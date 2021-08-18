import { IOptions } from '@application/interfaces/base.interfaces';
export const createTypeORMFindOneOptions = async (
  filters: any,
  options: IOptions,
  entity: any,
) => {
  return filters;
};
