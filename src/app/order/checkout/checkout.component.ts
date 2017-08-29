import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { CookieService } from 'ngx-cookie';
import { CartService, BrandService } from '../../services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  loadingCart: boolean = false;
  private noFood: boolean = false;
  private totalPrice: number = 0;
  private brandId: string;
  private buyerId: string;
  private cartItems:object[] = [];
  private itemTotalPrice:number[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private _cookieService: CookieService,
    private cart: CartService,
    private brand: BrandService
  ) { }

  ngOnInit() {
    this.loadingCart = true;
    this.brandId = this.activatedRoute.snapshot.queryParams["brand_id"];
    this.buyerId = this.activatedRoute.snapshot.queryParams["buyer_id"];

    if((this.brandId !== undefined) && (this.buyerId !== undefined)) {
      this.brand.getBrand(this.brandId).subscribe(
        success => {
          this.title.setTitle(success.data.brand.name);
          this.cart.getCart(this.buyerId, this.brandId).subscribe(
            success => {
              this._cookieService.putObject('cart_items', success.data.buyer.cart.cart_items);
              this.addData(success.data.buyer.cart.cart_items);
            },
            error => console.log(error)
          );
        },
        error => console.log(error)
      );
      this.loadingCart = false;

    } else {
      if((this._cookieService.get('buyer_id') !== undefined) && (this._cookieService.get('brand_id') !== undefined)) {
        this.brand.getBrand(this._cookieService.getObject('brand_id')).subscribe(
          success => {
            this.title.setTitle(success.data.brand.name);
            this.cart.getCart(this._cookieService.getObject('buyer_id'), this._cookieService.getObject('brand_id')).subscribe(
              success => {
                this._cookieService.putObject('cart_items', success.data.buyer.cart.cart_items);
                this.addData(success.data.buyer.cart.cart_items);
              },
              error => console.log(error)
            );
          },
          error => console.log(error)
        );
      } else {
        if(this._cookieService.getObject('cart_items') !== undefined) {
          this.brand.getBrand(this._cookieService.get('brand_id')).subscribe(
            success => {
              this.title.setTitle(success.data.brand.name);
              this.addData(this._cookieService.getObject('cart_items'));
            },
            error => console.log(error)
          );
        }
      }

      this.loadingCart = false;
    }
  }

  addData(data) {
    for(var i = 0; i < data.length; i++) {
      let total = 0;
      var selected_options_price: number = 0;

      if(data[i].selected_options != null) {
        for(var j = 0; j < data[i].selected_options.length; j++) {
          selected_options_price += +data[i].selected_options[j].price;
        }
      }

      total = data[i].quantity * data[i].product.price;
      this.totalPrice += (total + selected_options_price);
      this.itemTotalPrice.push(total);
      this.cartItems.push(data[i]);
    }
  }

  removeAll() {
    console.log('remove all');
  }

  deleteItem() {
    console.log('delete item');
  }

  goToMenu() {
    this.router.navigate(['menu']);
  }
}
