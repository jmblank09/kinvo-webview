import { Component } from '@angular/core';

import { MenuService, LocationService, CartService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService, LocationService, CartService]
})
export class AppComponent {

}
