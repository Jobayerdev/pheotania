import { BreedRoutes } from './breed.routing';
import { BreedsPageComponent } from './pages/breeds-page/breeds-page.component';
import { CommonModule } from '@angular/common';
import { CreateBreedPageComponent } from './pages/create-breed-page/create-breed-page.component';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateBreedPageComponent } from './pages/update-breed-page/update-breed-page.component';

@NgModule({
  imports: [
    CommonModule,
    BreedRoutes,
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
  declarations: [
    BreedsPageComponent,
    CreateBreedPageComponent,
    UpdateBreedPageComponent,
  ],
})
export class BreedModule {}
