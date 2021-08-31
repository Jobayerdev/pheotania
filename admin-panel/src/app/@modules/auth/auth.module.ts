import { AntDesignModule } from '@core/ant-design.module';
import { AuthAdminLoginComponent } from './components/auth-admin-login/auth-admin-login.component';
import { AuthAdminRegisterComponent } from './components/auth-admin-register/auth-admin-register.component';
import { AuthRoutingModule } from './auth.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthAdminLoginComponent, AuthAdminRegisterComponent],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    NzButtonModule,
    AntDesignModule,
    RouterModule,
  ],
  exports: [],
  providers: [],
})
export class AuthModule {}
