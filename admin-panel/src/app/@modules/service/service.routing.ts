import { RouterModule, Routes } from '@angular/router';

import { CreateServicePageComponent } from './pages/create-service-page/create-service-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { UpdateServicePageComponent } from './pages/update-service-page/update-service-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ServicesPageComponent,
  },
  {
    path: 'create-new',
    component: CreateServicePageComponent,
  },
  {
    path: 'update/:id',
    component: UpdateServicePageComponent,
  },
];

export const ServiceRoutes = RouterModule.forChild(routes);
