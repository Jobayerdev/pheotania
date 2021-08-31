import { RouterModule, Routes } from '@angular/router'

import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component'
import { UpdateUserPageComponent } from './pages/update-user-page/update-user-page.component'
import { UserPageComponent } from './pages/user-page/user-page.component'
import { UsersPageComponent } from './pages/users-page/users-page.component'

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
    path: 'create-user',
    component: CreateUserPageComponent,
  
  },
  {
    path: 'update-user/:id',
    component: UpdateUserPageComponent,
 
  },
  {
    path: ':id',
    component: UserPageComponent,
  
  },
];

export const UsersRoutes = RouterModule.forChild(routes);
