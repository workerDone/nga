import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutePaths } from './core/dictionaries'

const routes: Routes = [
  {
    path: RoutePaths.login,
    // canActivate: [LoginGuard],
    // canLoad: [LoginGuard],
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: RoutePaths.success,
    // canActivate: [LoginGuard],
    // canLoad: [LoginGuard],
    loadChildren: 'app/pages/success/success.module#SuccessModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
