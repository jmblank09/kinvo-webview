import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import { Observable } from "rxjs/Rx";
import { CookieService } from 'ngx-cookie';

import { AppSettings } from '../shared';

@Injectable()
export class BrandService {
  private url:string = AppSettings.API_URL;

  constructor(private http: Http, private _cookieService: CookieService) {}

  getBrand(id) {
    var graphql = `{
                    brand(id:`+ id +`) {
                      name
                      image
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
