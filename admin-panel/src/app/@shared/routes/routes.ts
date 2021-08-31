import { PermissionGuard } from '@shared/guards/permisson.guard';
import { PermissionsEnum } from 'src/app/@shared/enums/permissions.enum';
import { Routes } from '@angular/router';

export const content: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('@modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@modules/users/users.module').then((m) => m.UsersModule),
    canActivate: [PermissionGuard],
    data: {
      roles: [PermissionsEnum.USER_VIEW],
    },
  },
  {
    path: 'permissions',
    loadChildren: () =>
      import('@modules/permission/permission.module').then(
        (m) => m.PermissionModule
      ),
    canActivate: [PermissionGuard],
    data: {
      roles: [
        PermissionsEnum.ROLE_VIEW,
        PermissionsEnum.PERMISSION_TYPE_VIEW,
        PermissionsEnum.PERMISSION_VIEW,
      ],
    },
  },
  {
    path: 'breed',
    loadChildren: () =>
      import('@modules/breed/breed.module').then((m) => m.BreedModule),
    canActivate: [PermissionGuard],
    data: {
      roles: [PermissionsEnum.USER_VIEW],
    },
  },
  {
    path: 'service',
    loadChildren: () =>
      import('@modules/service/service.module').then((m) => m.ServiceModule),
  },
  {
    path: 'petType',
    loadChildren: () =>
      import('@modules/pet-type/pet-type.module').then((m) => m.PetTypeModule),
  },
  {
    path: 'pet',
    loadChildren: () =>
      import('@modules/pet/pet.module').then((m) => m.PetModule),
  },
];
