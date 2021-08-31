import { RouterModule, Routes } from '@angular/router';

import { CreatePetTypePageComponent } from './pages/create-pet-type-page/create-pet-type-page.component';
import { PetTypesPageComponent } from './pages/pet-types-page/pet-types-page.component';
import { UpdatePetTypePageComponent } from './pages/update-pet-type-page/update-pet-type-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: PetTypesPageComponent,
  },
  {
    path: 'create-new',
    component: CreatePetTypePageComponent,
  },
  {
    path: 'update/:id',
    component: UpdatePetTypePageComponent,
  },
];

export const PetTypeRoutes = RouterModule.forChild(routes);
