import { CommonModule } from '@angular/common';
import { CreatePetTypePageComponent } from './pages/create-pet-type-page/create-pet-type-page.component';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PetTypeRoutes } from './pet-type.routing';
import { PetTypesPageComponent } from './pages/pet-types-page/pet-types-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePetTypePageComponent } from './pages/update-pet-type-page/update-pet-type-page.component';

const COMPONENTS = [
  CreatePetTypePageComponent,
  UpdatePetTypePageComponent,
  PetTypesPageComponent,
];
@NgModule({
  imports: [
    CommonModule,
    PetTypeRoutes,
    NzPageHeaderModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzGridModule,
  ],
  declarations: [...COMPONENTS],
})
export class PetTypeModule {}
