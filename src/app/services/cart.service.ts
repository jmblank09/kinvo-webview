import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import { Observable } from "rxjs/Rx";

import { AppSettings } from '../shared';

@Injectable()
export class CartService {
  private url:string = AppSettings.API_URL;

  constructor(private http: Http) {}

  getCart(buyerId, brandId) {
    var graphql = `{
                    buyer(buyer_id: `+ buyerId +`, brand_id: `+ brandId +`) {
                      cart {
                        id
                        cart_items {
                          quantity
                          selected_options
                          product {
                            name
                            image
                            price
                          }
                        }
                      }
                    }
                  }`;
    return this.sendRequest(graphql);
  }

  addToCart(data: object) {
    var ids = "";

    for(var i = 0; i < data['selected_options'].length; i++) {
      if(i != data['selected_options'].length - 1)
        ids += '"'+data['selected_options'][i]['id']+'",';
      else
        ids += '"'+data['selected_options'][i]['id']+'"';
    }

    var mutation = ` mutation {
      addItemToCart(cart_id: `+ data['cart_id'] +`,
        product_id: `+ data['product_id'] +`,
        product_option_value_ids: [`+ ids +`],
        quantity: `+ data['quantity'] +`) {
          cart {
            id
          }
      }
    }`;
    return this.sendRequest(mutation);
  }

  removeAllItemsCart(id) {
    var mutation = ` mutation {
                      removeAllItemsFromCart(cart_id: `+id+`) {
                        id
                      }
                    }`;
    return this.sendRequest(mutation);
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
