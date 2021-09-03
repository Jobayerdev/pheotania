import { PermissionsEnum } from 'src/app/@shared/enums/permissions.enum';
import { Routes } from '@angular/router';

export const content: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('@modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@modules/users/users.module').then((m) => m.UsersModule),
    // canActivate: [PermissionGuard],
    data: {
      roles: [PermissionsEnum.USER_VIEW],
    },
  },
  {
    path: 'permissions',
    loadChildren: () =>
      import('@modules/permission/permission.module').then(
        (m) => m.PermissionModule,
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('@modules/service/service.module').then((m) => m.ServiceModule),
  },
];
