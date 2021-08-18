export const methodSuccessMessage = (
  method: 'POST' | 'PUT' | 'DELETE' | 'GET',
): string => {
  switch (method) {
    case 'GET':
      return 'Get Success';
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
