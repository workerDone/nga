import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { observable, action, computed } from 'mobx-angular';

import { environment } from '../../../../environments/environment';

@Injectable()
export class ApiService {

  private _apiUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  @computed get baseApiUrl() {
    return environment.apiUrl;
  }
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${this.baseApiUrl}${path}`, { params })
      .catch(err => this.formatErrors(err))
      .map(this.toJSON);
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${this.baseApiUrl}${path}`, body)
      .catch(err => this.formatErrors(err))
      .map(this.toJSON)
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${this.baseApiUrl}${path}`, body)
      .catch(err => this.formatErrors(err))
      .map(this.toJSON);
  }

  delete(path): Observable<any> {
    return this.http
      .delete(`${this.baseApiUrl}${path}`)
      .catch(err => this.formatErrors(err))
      .map(this.toJSON);
  }

  private toJSON = (response: Response) => {
    return (response != null && response.json != null)
      ? response.json()
      : response;
  }

  private formatErrors(error: any) {
    let parsedError;

    try {
      parsedError = error.json();
    } catch (err) { }

    return Observable.throw(parsedError || error);
  }
}
