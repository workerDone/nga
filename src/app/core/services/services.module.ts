import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApiService,
  // JwtService,
  NavigationService,
  // SettingsService,
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
        NavigationService,
        ApiService,
      ]
    };
  }
 }
