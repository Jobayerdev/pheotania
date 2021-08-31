import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@shared/guards/auth.guard';
import { LayoutContentComponent } from '@shared/components/layout/layout-content.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { UnAuthorizationGuard } from '@shared/guards/unAuthorization.guard';
import { content } from '@shared/routes/routes';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },

  {
    path: 'auth',
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [UnAuthorizationGuard],
  },
  {
    path: 'admin',
    component: LayoutContentComponent,
    children: content,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
