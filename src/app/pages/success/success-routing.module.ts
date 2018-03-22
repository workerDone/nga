import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessComponent } from './page/success.component';
import { RouteUserPaths } from '../../core/dictionaries'

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContributionComponent } from './components/contribution/contribution.component';
import { VerificationComponent } from './components/verification/verification.component';
import { HistoryComponent } from './components/history/history.component';
import { ReferralSystemComponent } from './components/referral-system/referral-system.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  {
  path: '',
  component: SuccessComponent,
  children: [{
      path: RouteUserPaths.dashboard,
      component: DashboardComponent
    }, {
      path: RouteUserPaths.contribution,
      component: ContributionComponent
    },
    {
      path: RouteUserPaths.verification,
      component: VerificationComponent
    },  {
      path: RouteUserPaths.history,
      component: HistoryComponent
    }, {
      path: RouteUserPaths.referralSystem,
      component: ReferralSystemComponent
    }, {
      path: RouteUserPaths.faq,
      component: FaqComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessRoutingModule { }
