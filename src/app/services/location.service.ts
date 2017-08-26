import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import { Observable } from "rxjs/Rx";
import { CookieService } from 'ngx-cookie';

import { AppSettings } from '../shared';

@Injectable()
export class LocationService {
  private url:string = AppSettings.MAP_URL;

  constructor(private http: Http, private _cookieService: CookieService) {}

  getLocation(lat, long) {
    this.url += lat + ',' + long;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.url, {headers: headers})
    .map((data: Response) => data.json())
    .catch(this.handleError);
  }
  private handleError (error: any) {
    return Observable.throw(error.json());
  }
}
