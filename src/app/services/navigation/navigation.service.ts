import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { RoutePaths } from '../../core/dictionaries'


@Injectable()
export class NavigationService {

  constructor(
    private router : Router
  ) { }
  
  login() {
    this.router.navigate([`/${RoutePaths.login}`]);
  }
  success() {
    this.router.navigate([`/${RoutePaths.success}`]);
  }
}
