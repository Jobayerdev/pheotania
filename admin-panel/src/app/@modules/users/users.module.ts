import { CommonModule } from '@angular/common';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { USERS_STATE_NAME } from 'src/app/@state/users/users.selectos';
import { UpdateUserPageComponent } from './pages/update-user-page/update-user-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UsersEffects } from '@state/users/users.effect';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersRoutes } from './users.routing';
import { usersReducer } from 'src/app/@state/users/users.reducer';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutes,
    NzPageHeaderModule,
    NzButtonModule,
    NzFormModule,
    NzSpinModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSpaceModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzDescriptionsModule,
    NzListModule,
    NzGridModule,
    StoreModule.forFeature(USERS_STATE_NAME, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  declarations: [
    CreateUserPageComponent,
    UsersPageComponent,
    CustomersPageComponent,
    UpdateUserPageComponent,
    UserPageComponent,
  ],
})
export class UsersModule {}
