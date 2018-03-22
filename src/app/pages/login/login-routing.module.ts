import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePaths } from '../../core/dictionaries'

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import  { LoginPageComponent } from './components/login-page/login-page.component'

const routes: Routes = [
    { 
      path: '',
      component: LoginPageComponent,
      children: [
        {path: RoutePaths.in, component: LogInComponent}, 
        {path: RoutePaths.up, component: SignUpComponent},  
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
