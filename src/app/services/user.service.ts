import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import { Observable } from "rxjs/Rx";
import { CookieService } from 'ngx-cookie';

import { AppSettings } from '../shared';

@Injectable()
export class UserService {
  private url:string = AppSettings.API_URL;

  constructor(private http: Http, private _cookieService: CookieService) {}

  getUserDetails() {
    var graphql = `{
                    buyer(brand_id: `+ this._cookieService.get('brand_id') +`, buyer_id:`+ this._cookieService.get('buyer_id')+`) {
                  		first_name
                      last_name
                      fb_uid
                      mobile_number
                    }
                  }`;
    return this.sendRequest(graphql);
  }

  sendRequest(graphql) {
    var formatted_data = {
      operationName: null,
      query: graphql,
      variables: null
    }

    const body = JSON.stringify(formatted_data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url, body, {headers: headers})
    .map((data: Response) => data.json())
    .catch(this.handleError);
  }

  private handleError (error: any) {
    return Observable.throw(error.json());
  }
}
