import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPageComponent } from './user-page/user-page.component';
import { RouteUserPaths } from '../../core/dictionaries'
const routes: Routes = [
  {
  path: '',
  component: UserPageComponent,
  // children: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
