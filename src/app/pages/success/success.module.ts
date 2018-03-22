import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MaterialModule } from '../../material/material.module'

import { SuccessRoutingModule } from './success-routing.module';
import { SuccessComponent } from './page/success.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContributionComponent } from './components/contribution/contribution.component';
import { VerificationComponent } from './components/verification/verification.component';
import { HistoryComponent } from './components/history/history.component';
import { ReferralSystemComponent } from './components/referral-system/referral-system.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SuccessRoutingModule
  ],
  declarations: [
    SuccessComponent,
    DashboardComponent, 
    ContributionComponent, 
    VerificationComponent, 
    HistoryComponent, 
    ReferralSystemComponent, 
    FaqComponent]
})
export class SuccessModule { }
