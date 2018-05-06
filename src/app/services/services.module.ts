import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  // ApiService,
  // JwtService,
  NavigationService,
  // SettingsService,
  // UserService,
  // AuthService,
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
        // JwtService,
        NavigationService,
        // SettingsService,
        // UserService,
        // AuthService,
        // ContributionsService,
      ]
    };
  }
 }
