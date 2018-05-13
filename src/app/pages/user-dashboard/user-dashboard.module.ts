import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DashboardService } from './services/dashboard/dashboard.service';
@NgModule({
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ],
  declarations: [UserDashboardComponent]
})
export class UserDashboardModule { }
