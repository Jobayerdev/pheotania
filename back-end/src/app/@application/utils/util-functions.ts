import { Raw } from 'typeorm';

export const ILIKE = (searchterm: any) => {
  return Raw((alias) => `${alias} ILIKE '%${searchterm}%'`);
};

//? Token Extract
export function extractToken(headers: any) {
  let token: string =
    headers && headers.authorization ? headers.authorization : '';
  token = token.replace(/Bearer\s+/gm, '');
  return token;
}
