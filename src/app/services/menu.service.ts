import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import { Observable } from "rxjs/Rx";
import { CookieService } from 'ngx-cookie';

import { AppSettings } from '../shared';

@Injectable()
export class MenuService {
  private url:string = AppSettings.API_URL;

  constructor(private http: Http, private _cookieService: CookieService) {}

  getAllCategories(id: string) {
    var graphql = `{
                      categories(brand_id: `+ id +`) {
                        id
                        name
                      }
                    }`;
    return this.sendRequest(graphql);
  }

  getProducts(id: string) {
    // with location
    var graphql = `{
                      products(brand_id:`+ this._cookieService.get('brand_id')
                      +`, category_id: `+ id +`, location: "`+ this._cookieService.get('location') +`"){
                        id
                        name
                        description
                        image
                        price
                      }
                    }`;
    return this.sendRequest(graphql);
  }

  getProduct(id :string) {
    var graphql = `{
                      product(id: `+ id +`brand_id:`+ this._cookieService.get('brand_id') +`){
                        id
                        name
                        description
                        image
                        price
                        product_options {
                          id
                          name
                          product_option_values {
                            id
                            value
                            price
                          }
                        }
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
