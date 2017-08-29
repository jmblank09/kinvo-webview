import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import { Observable } from "rxjs/Rx";
import { CookieService } from 'ngx-cookie';

import { AppSettings } from '../shared';

@Injectable()
export class LocationService {
  private url:string = AppSettings.MAP_URL;

  constructor(private http: Http, private _cookieService: CookieService) {}

  getLocation(lat: string, long: string) {
    this.url += lat + ',' + long;
    return this.http.get(this.url)
    .map((data: Response) => data.json())
    .catch(this.handleError);
  }

  private handleError (error: any) {
    return Observable.throw(error.json());
  }
}
