import { RouterModule, Routes } from '@angular/router';

import { AnalyticsDashboardPageComponent } from './pages/analytics-dashboard-page/analytics-dashboard-page.component';
import { DefaultDashboardPageComponent } from './pages/default-dashboard-page/default-dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full',
  },
  {
    path: 'default',
    component: DefaultDashboardPageComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsDashboardPageComponent,
  },
];

export const DashboardRoutes = RouterModule.forChild(routes);
