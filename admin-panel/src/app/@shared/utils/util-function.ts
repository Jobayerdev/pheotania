import { IBaseFilter } from './../interfaces/base.interfaces';

//Check access permission
export const hasAccessPermission = (
  accessList: string[],
  userPermissions: string[]
): boolean => {
  const hasAccess = userPermissions.filter((role: string) =>
    accessList.includes(role)
  );

  return hasAccess.length > 0;
};

//base filter query utils
export const baseFilterQueryUtils = (options: IBaseFilter): string => {
  return `searchTerm=${options.searchTerm || ''}&page=${
    options.page || ''
  }&take=${options.take || ''}&between=${options.between || ''}&before=${
    options.before || ''
  }&after=${options.after || ''}&fetchAll=${options.fetchAll || ''}&single=${
    options.single || ''
  }&relations=${options.relations || ''}&selects=${options.selects || ''}`;
};

// Array replace matched item
export const replacedArrayMatchedItem = (
  arr: any[],
  payload: { id: string }
) => {
  return arr?.map((x: any) => (x.id === payload.id ? payload : x));
};
