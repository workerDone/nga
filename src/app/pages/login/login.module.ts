import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { ParticlesModule } from 'angular-particle';
import { MobxAngularModule } from 'mobx-angular';

import { LoginService } from './services/login-services/login.service';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ParticlesModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    HttpClientModule,
    MobxAngularModule,
  ],
  declarations: [
    LoginPageComponent,
    LogInComponent,
    SignUpComponent,
  ],
  providers: [
    LoginService,
  ]
})
export class LoginModule { }
