import { AnalyticsDashboardPageComponent } from './pages/analytics-dashboard-page/analytics-dashboard-page.component';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { DefaultDashboardPageComponent } from './pages/default-dashboard-page/default-dashboard-page.component';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzResultModule } from 'ng-zorro-antd/result';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
    NzResultModule,
    NzButtonModule,
    NzPageHeaderModule,
  ],
  declarations: [
    DefaultDashboardPageComponent,
    AnalyticsDashboardPageComponent,
  ],
})
export class DashboardModule {}
