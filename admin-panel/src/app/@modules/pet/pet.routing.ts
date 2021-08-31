import { RouterModule, Routes } from '@angular/router';

import { CreatePetPageComponent } from './pages/create-pet-page/create-pet-page.component';
import { PetListPageComponent } from './pages/pet-list-page/pet-list-page.component';
import { UpdatePetPageComponent } from './pages/update-pet-page/update-pet-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: PetListPageComponent,
  },
  {
    path: 'create-new',
    component: CreatePetPageComponent,
  },
  {
    path: 'update/:id',
    component: UpdatePetPageComponent,
  },
];

export const PetRoutes = RouterModule.forChild(routes);
