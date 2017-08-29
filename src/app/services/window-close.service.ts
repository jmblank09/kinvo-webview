import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import { Observable } from "rxjs/Rx";

import { AppSettings } from '../shared';

@Injectable()
export class WindowCloseService {
  private url:string = AppSettings.BOT_URL;

  constructor(private http: Http) {}

  sendToBot(id, type){
    var formatted_data = {
        "object": "page",
        "entry": [
            {
                "id": "121516625123300",
                "time": 1503983907017,
                "messaging": [
                    {
                        "recipient": {
                            "id": "121516625123300"
                        },
                        "timestamp": 1503983907017,
                        "sender": {
                            "id": id
                        },
                        "postback": {
                            "payload": type,
                            "title": "Order"
                        }
                    }
                ]
            }
        ]
    };

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
