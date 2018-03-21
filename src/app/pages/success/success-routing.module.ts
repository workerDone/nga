import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessComponent } from './page/success.component';

const routes: Routes = [
  {
  path: '',
  component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessRoutingModule { }
