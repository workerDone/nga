import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from '../../material/material.module'
import { ParticlesModule } from 'angular-particle';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ParticlesModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    HttpClientModule
  ],
  declarations: [
    LoginPageComponent,
    LogInComponent,
    SignUpComponent,
  ]
})
export class LoginModule { }
