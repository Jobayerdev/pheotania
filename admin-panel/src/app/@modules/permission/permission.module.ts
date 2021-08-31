import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CreatePermissionPageComponent } from './pages/create-permission-page/create-permission-page.component';
import { CreatePermissionTypePageComponent } from './pages/create-permission-type-page/create-permission-type-page.component';
import { CreateRolePageComponent } from './pages/create-role-page/create-role-page.component';
import { EffectsModule } from '@ngrx/effects';
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
import { PERMISSION_STATE_NAME } from '@state/permissions/permissions.selectors';
import { PermissionRoutes } from './permission.routing';
import { PermissionTypesPageComponent } from './pages/permission-types-page/permission-types-page.component';
import { PermissionsEffects } from '@state/permissions/permissions.effect';
import { PermissionsPageComponent } from './pages/permissions-page/permissions-page.component';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { StoreModule } from '@ngrx/store';
import { UpdatePermissionComponent } from './pages/update-permission/update-permission.component';
import { UpdatePermissionTypePageComponent } from './pages/update-permission-type-page/update-permission-type-page.component';
import { UpdateRolePageComponent } from './pages/update-role-page/update-role-page.component';
import { permissionReducer } from '@state/permissions/permissions.reducer';

@NgModule({
  imports: [
    CommonModule,
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
    StoreModule.forFeature(PERMISSION_STATE_NAME, permissionReducer),
    EffectsModule.forFeature([PermissionsEffects]),
    PermissionRoutes,
    NzPopconfirmModule,
    NzSelectModule,
  ],
  declarations: [
    PermissionTypesPageComponent,
    PermissionsPageComponent,
    RolesPageComponent,
    CreatePermissionPageComponent,
    CreateRolePageComponent,
    UpdateRolePageComponent,
    CreatePermissionTypePageComponent,
    UpdatePermissionTypePageComponent,
    UpdatePermissionComponent,
  ],
})
export class PermissionModule {}
