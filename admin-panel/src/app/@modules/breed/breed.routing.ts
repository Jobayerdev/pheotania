import { RouterModule, Routes } from '@angular/router';

import { BreedsPageComponent } from './pages/breeds-page/breeds-page.component';
import { CreateBreedPageComponent } from './pages/create-breed-page/create-breed-page.component';
import { UpdateBreedPageComponent } from './pages/update-breed-page/update-breed-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: BreedsPageComponent,
  },
  {
    path: 'create-new',
    component: CreateBreedPageComponent,
  },
  {
    path: 'update/:id',
    component: UpdateBreedPageComponent,
  },
];

export const BreedRoutes = RouterModule.forChild(routes);
