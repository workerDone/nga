import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  // ApiService,
  // ICOService,
  // JwtService,
  NavigationService,
  // SettingsService,
  // UserService,
  // AuthService,
  // LotteryService,
  // ICOTiersService,
  // ContributionsService
} from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ServicesModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        // ApiService,
        // ICOService,
        // JwtService,
        NavigationService,
        // SettingsService,
        // UserService,
        // AuthService,
        // LotteryService,
        // ICOTiersService, 
        // ContributionsService,
      ]
    }
  }
 }
