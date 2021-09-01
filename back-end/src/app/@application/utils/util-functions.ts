import { Raw, getConnection } from 'typeorm';

import { IProperties } from '@application/interfaces/base.interfaces';

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
export async function getEntityProperties(entityName): Promise<IProperties> {
  try {
    const entity: any = await getConnection().getMetadata(entityName);

    const searchTerms: string[] = entity.target.SEARCH_TERMS || [];
    const orders: string[] = entity.target.ORDERS || [];

    const ownColumns = await entity.ownColumns
      .map((column) => column.propertyName)
      .filter((colName) => colName !== 'id');

    const relations = await entity.relations.map(
      (column) => column.propertyName,
    );

    relations.map((r) => {
      if (ownColumns.includes(r)) {
        const i = ownColumns.indexOf(r);
        ownColumns.splice(i, 1);
      }
    });

    return { ownColumns, relations, searchTerms, orders };
  } catch (error) {
    new Error('Invalid Entity Name');
  }
}

//? Async For Each
export const asyncForEach = async (array: any[], callback: any) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};
export const getRandomString = (length) => {
  var randomChars = '0123456789';
  var result = '';
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length),
    );
  }
  return result;
};
