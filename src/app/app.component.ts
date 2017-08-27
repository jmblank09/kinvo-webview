import { Component } from '@angular/core';

import {
  MenuService,
  LocationService,
  CartService,
  BrandService
} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    MenuService,
    LocationService,
    CartService,
    BrandService
  ]
})
export class AppComponent {

}
