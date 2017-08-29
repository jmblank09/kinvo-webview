import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WindowCloseService, UserService } from '../../services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private showDialog:boolean = false;

  constructor(
    private router: Router,
    private close: WindowCloseService,
    private user: UserService
  ) { }

  onSubmit() {
    // this.router.navigate(['/review']);
    console.log('close window');

    this.user.getUserDetails().subscribe(
      success => {
        this.close.sendToBot(success.data.buyer.fb_uid).subscribe(
          success => {
            console.log('success');
            window.location.replace('https://www.messenger.com/closeWindow/?image_url=https://s3-ap-southeast-1.amazonaws.com/kinvo-assets/images/illustration-thanks.png&display_text=Test');
          },
          error => console.log('error')
        );
      },
      error => console.log(error)
    );
  }
}
