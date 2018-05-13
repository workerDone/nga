import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

import { ApiService } from '../../../../core/services/api/api.service';

@Injectable()
export class DashboardService {

  constructor(
    private apiService: ApiService
  ) { }

}
