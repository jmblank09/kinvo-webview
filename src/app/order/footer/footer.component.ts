import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CookieService } from 'ngx-cookie';

import { WindowCloseService, UserService } from '../../services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  showDialog:boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _cookieService: CookieService,
    private close: WindowCloseService,
    private user: UserService,
  ) { }

  onSubmit() {
    if(this.activatedRoute.snapshot.queryParams["buyer_id"] !== undefined) {
    this._cookieService.put('buyer_id', this.activatedRoute.snapshot.queryParams["buyer_id"]);
    }

    this.user.getUserDetails(this._cookieService.get('buyer_id')).subscribe(
      success => {
        this.close.sendToBot(success.data.buyer.fb_uid, 'SHOW_DELIVERY').subscribe(
          success => {
            console.log('success');
          },
          error => {
            console.log('error');
            this.showDialog = !this.showDialog;
            window.location.href = 'https://www.messenger.com/closeWindow/?image_url=https://s3-ap-southeast-1.amazonaws.com/kinvo-assets/images/illustration-thanks.png&display_text=Thank+You+For+Ordering';
          }
        );
      },
      error => console.log(error)
    );
  }
}
