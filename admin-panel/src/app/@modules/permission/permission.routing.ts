import { RouterModule, Routes } from '@angular/router'

import { CreatePermissionPageComponent } from './pages/create-permission-page/create-permission-page.component'
import { CreatePermissionTypePageComponent } from './pages/create-permission-type-page/create-permission-type-page.component'
import { CreateRolePageComponent } from './pages/create-role-page/create-role-page.component'
import { PermissionTypesPageComponent } from './pages/permission-types-page/permission-types-page.component'
import { PermissionsEnum } from 'src/app/@shared/enums/permissions.enum'
import { PermissionsPageComponent } from './pages/permissions-page/permissions-page.component'
import { RolesPageComponent } from './pages/roles-page/roles-page.component'
import { UpdatePermissionComponent } from './pages/update-permission/update-permission.component'
import { UpdatePermissionTypePageComponent } from './pages/update-permission-type-page/update-permission-type-page.component'
import { UpdateRolePageComponent } from './pages/update-role-page/update-role-page.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
    data: {
      roles: [PermissionsEnum.ROLE_VIEW],
    },
  },
  {
    path: 'list',
    component: PermissionsPageComponent,
    data: {
      roles: [PermissionsEnum.PERMISSION_VIEW],
    },
  },
  {
    path: 'roles',
    component: RolesPageComponent,
    data: {
      roles: [PermissionsEnum.ROLE_VIEW],
    },
  },

  {
    path: 'types',
    component: PermissionTypesPageComponent,
    data: {
      roles: [PermissionsEnum.PERMISSION_TYPE_VIEW],
    },
  },
  {
    path: 'crate-permission',
    component: CreatePermissionPageComponent,
    data: {
      roles: [PermissionsEnum.PERMISSION_CREATE],
    },
  },
  {
    path: 'update-permission/:id',
    component: UpdatePermissionComponent,
    data: {
      roles: [PermissionsEnum.PERMISSION_MODIFY],
    },
  },
  {
    path: 'create-role',
    component: CreateRolePageComponent,
    data: {
      roles: [PermissionsEnum.ROLE_CREATE],
    },
  },
  {
    path: 'update-role/:id',
    component: UpdateRolePageComponent,
    data: {
      roles: [PermissionsEnum.ROLE_MODIFY],
    },
  },
  {
    path: 'create-permission-type',
    component: CreatePermissionTypePageComponent,
    data: {
      roles: [PermissionsEnum.PERMISSION_TYPE_CREATE],
    },
  },
  {
    path: 'update-permission-type/:id',
    component: UpdatePermissionTypePageComponent,
    data: {
      roles: [PermissionsEnum.PERMISSION_TYPE_MODIFY],
    },
  },
];

export const PermissionRoutes = RouterModule.forChild(routes);
