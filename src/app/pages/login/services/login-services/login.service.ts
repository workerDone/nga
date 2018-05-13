import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

import { ApiService } from '../../../../core/services/api/api.service';
@Injectable()
export class LoginService {

  constructor(
    private apiService: ApiService
  ) { }

  @computed get url() {
   return this.apiService.baseApiUrl;
  }
}
