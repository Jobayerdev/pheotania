import { CommonModule } from '@angular/common';
import { CreatePetPageComponent } from './pages/create-pet-page/create-pet-page.component';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { PetListPageComponent } from './pages/pet-list-page/pet-list-page.component';
import { PetRoutes } from './pet.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { UpdatePetPageComponent } from './pages/update-pet-page/update-pet-page.component';

@NgModule({
  imports: [
    CommonModule,
    PetRoutes,
    NzPageHeaderModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzGridModule,
    NzUploadModule,
    NzRadioModule,
    SharedModule,
  ],
  declarations: [
    CreatePetPageComponent,
    UpdatePetPageComponent,
    PetListPageComponent,
  ],
})
export class PetModule {}
