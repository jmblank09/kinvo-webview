import { Component } from '@angular/core';

import { WindowCloseService, UserService } from '../../services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private showDialog:boolean = false;

  constructor(
    private close: WindowCloseService,
    private user: UserService
  ) { }

  onSubmit() {
    this.user.getUserDetails().subscribe(
      success => {
        this.close.sendToBot(success.data.buyer.fb_uid).subscribe(
          success => {
            console.log('success');
          },
          error => {
            console.log('error');

          }
        );
      },
      error => console.log(error)
    );

    window.location.href = 'https://www.messenger.com/closeWindow/?image_url=https://s3-ap-southeast-1.amazonaws.com/kinvo-assets/images/illustration-thanks.png&display_text=Test';
  }
}
