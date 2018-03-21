import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MaterialModule } from '../../material/material.module'

import { SuccessRoutingModule } from './success-routing.module';
import { SuccessComponent } from './page/success.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SuccessRoutingModule
  ],
  declarations: [SuccessComponent]
})
export class SuccessModule { }
