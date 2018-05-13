import { Component, OnInit } from '@angular/core';

import { NavigationService } from './core/services';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    // this.navigationService.success()
  }
}
