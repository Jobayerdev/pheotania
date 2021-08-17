export function getSingleDataPlaceholder(payload: any) {
  const data = {
    message: `Get Single Data Success`,
    success: true,
    data: payload ? payload : null,
  };

  return data;
}

export function insertDataPlaceholder(payload: any) {
  const data = {
    message: `Insert Data Success`,
    success: true,
    data: payload,
  };

  return data;
}

export function updateDataPlaceholder(payload: any) {
  const data = {
    message: `Update Data Success`,
    success: true,
    data: payload.length > 0 ? payload[0] : null,
  };

  return data;
}

export function deleteDataPlaceholder(payload: any) {
  const data = {
    message: `Delete Data Success`,
    success: true,
    data: payload,
  };

  return data;
}

export function errorPlaceholder(error: string, msg: string) {
  const data = {
    success: false,
    error,
    message: msg,
  };

  return data;
}

export function successPlaceholder(msg: string, payload?: any) {
  const data = {
    success: true,
    message: msg,
    data: payload,
  };

  return data;
}

export const methodSuccessMessage = (
  method: 'POST' | 'PUT' | 'DELETE',
): string => {
  switch (method) {
    case 'POST':
      return 'Created Success';
    case 'PUT':
      return 'Update Success';
    case 'DELETE':
      return 'Delete Success';
    default:
      return 'Success';
  }
};
