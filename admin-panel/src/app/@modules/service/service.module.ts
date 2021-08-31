import { CommonModule } from '@angular/common';
import { CreateServicePageComponent } from './pages/create-service-page/create-service-page.component';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceRoutes } from './service.routing';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { UpdateServicePageComponent } from './pages/update-service-page/update-service-page.component';

const COMPONENTS = [
  CreateServicePageComponent,
  UpdateServicePageComponent,
  ServicesPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ServiceRoutes,
    NzPageHeaderModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzGridModule,
    NzDatePickerModule,
  ],
  declarations: [...COMPONENTS],
})
export class ServiceModule {}
