import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutePaths } from './core/dictionaries';

const routes: Routes = [
  {
    path: RoutePaths.login,
    // canActivate: [LoginGuard],
    // canLoad: [LoginGuard],
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: RoutePaths.user,
    // canActivate: [LoginGuard],
    // canLoad: [LoginGuard],
    loadChildren: 'app/pages/user/user.module#UserModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
