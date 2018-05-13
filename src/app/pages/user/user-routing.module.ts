import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPageComponent } from './user-page/user-page.component';
import { RouteUserPaths } from '../../core/dictionaries';

import { UserDashboardRoutingModule } from '../user-dashboard/user-dashboard-routing.module';
const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
  },
  {
    path: RouteUserPaths.dashboard,
    loadChildren: 'app/pages/user-dashboard/user-dashboard.module#UserDashboardModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
