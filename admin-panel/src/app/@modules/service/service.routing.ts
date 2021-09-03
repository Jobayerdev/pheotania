import { RouterModule, Routes } from '@angular/router';

import { ServiceDepartmentPageComponent } from './pages/service-department-page/service-department-page.component';
import { ServiceDepartmentsPageComponent } from './pages/service-departments-page/service-departments-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: ServicesPageComponent,
  },
  {
    path: 'list',
    component: ServicePageComponent,
  },
  {
    path: 'departments/list',
    component: ServiceDepartmentsPageComponent,
  },
  {
    path: 'departments:id',
    component: ServiceDepartmentPageComponent,
  },
];

export const ServiceRoutes = RouterModule.forChild(routes);
