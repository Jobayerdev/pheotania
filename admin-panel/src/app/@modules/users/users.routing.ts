import { RouterModule, Routes } from '@angular/router';

import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
import { PermissionGuard } from '@shared/guards/permisson.guard';
import { PermissionsEnum } from 'src/app/@shared/enums/permissions.enum';
import { UpdateUserPageComponent } from './pages/update-user-page/update-user-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: UsersPageComponent,
  },
  {
    path: 'customers',
    component: CustomersPageComponent,
  },

  {
    path: 'create-user',
    component: CreateUserPageComponent,
    canActivate: [PermissionGuard],
    data: {
      roles: [PermissionsEnum.USER_CREATE],
    },
  },
  {
    path: 'update-user/:id',
    component: UpdateUserPageComponent,
    canActivate: [PermissionGuard],
    data: {
      roles: [PermissionsEnum.USER_MODIFY],
    },
  },
  {
    path: ':id',
    component: UserPageComponent,
    canActivate: [PermissionGuard],
    data: {
      roles: [PermissionsEnum.USER_VIEW],
    },
  },
];

export const UsersRoutes = RouterModule.forChild(routes);
