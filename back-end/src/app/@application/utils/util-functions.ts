import { Raw } from 'typeorm';

export const ILIKE = (searchterm: any) => {
  return Raw((alias) => `${alias} ILIKE '%${searchterm}%'`);
};
