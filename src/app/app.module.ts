import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './core/services/services.module';
import { MaterialModule } from './material/material.module'


import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AsedeComponent } from './pages-components/asede/asede.component';
import { AsedeItemsComponent } from './pages-components/asede-items/asede-items.component';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [
    AppComponent,
    AsedeComponent,
    AsedeItemsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ServicesModule.forRoot(),
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
