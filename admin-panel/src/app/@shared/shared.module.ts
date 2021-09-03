import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from '@core/icons-provider.module';
import { LayoutContentComponent } from './components/layout/layout-content.component';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutContentComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzDropDownModule,
    NzSelectModule,
    NzButtonModule,
    NzSelectModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [],
})
export class SharedModule {}
