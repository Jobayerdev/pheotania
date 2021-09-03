import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RouterModule } from '@angular/router';
import { ServiceDepartmentPageComponent } from './pages/service-department-page/service-department-page.component';
import { ServiceDepartmentsPageComponent } from './pages/service-departments-page/service-departments-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { ServiceRoutes } from './service.routing';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { UpdateServiceDepartmentPageComponent } from './pages/update-service-department-page/update-service-department-page.component';

const COMPONENTS = [
  ServiceDepartmentPageComponent,
  ServiceDepartmentsPageComponent,
  UpdateServiceDepartmentPageComponent,
  ServicePageComponent,
  ServicesPageComponent,
];
@NgModule({
  imports: [
    CommonModule,
    ServiceRoutes,
    RouterModule,
    NzSwitchModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzPageHeaderModule,
    NzTableModule,
    NzButtonModule,
    NzRadioModule,
    NzCheckboxModule,
    NzPopconfirmModule,
    NzSelectModule,
  ],
  declarations: [...COMPONENTS],
})
export class ServiceModule {}
