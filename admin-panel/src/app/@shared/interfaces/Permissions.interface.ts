export interface IPermission {
  id: string;
  isActive: boolean;
  title: string;
}
export interface ICreatePermission {
  permissionType: string;
  title: string;
}

export interface IUpdatePermission {
  title: string;
  permissionType: string;
}
