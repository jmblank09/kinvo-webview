import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CookieService } from 'ngx-cookie';

import { WindowCloseService, UserService } from '../services';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  currentDate = new Date();

  temp = {
    date: this.currentDate,
    time: this.currentDate.getHours() + ':' + this.currentDate.getMinutes()
  }

  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _cookieService: CookieService,
    private close: WindowCloseService,
    private user: UserService,
  ) {}

  ngOnInit() {
    this.title.setTitle('Delivery');
  }

  onSubmit() {
    const data = {
      date: (this.temp.date.getUTCMonth() + 1)
        + '/' + (this.temp.date.getUTCDate() + 1)
        + '/' + this.temp.date.getUTCFullYear(),
      time: this.temp.time
    }

    console.log(data);

    if(this.activatedRoute.snapshot.queryParams["buyer_id"] !== undefined)
      this._cookieService.put('buyer_id', this.activatedRoute.snapshot.queryParams["buyer_id"]);

    this.user.getUserDetails(this._cookieService.get('buyer_id')).subscribe(
      success => {
        this.close.sendToBot(success.data.buyer.fb_uid, 'CHECKOUT').subscribe(
          success => {
            console.log('success');
          },
          error => {
            console.log('error');
            window.location.href = 'https://www.messenger.com/closeWindow/?image_url=https://s3-ap-southeast-1.amazonaws.com/kinvo-assets/images/illustration-thanks.png&display_text=Thank+You+For+Ordering';
          }
        );
      },
    );

  }
}
