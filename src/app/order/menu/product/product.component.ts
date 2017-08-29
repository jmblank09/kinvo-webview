import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Subscription } from "rxjs/Rx";

import { MenuService } from '../../../services';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productId: string;
  private image: string = '';
  private noImage: string = '';
  private quantity: number = 1;
  private additionalPrice: number = 0;
  private totalPrice: number;
  private product: object;
  private selectedProductOption: object;
  private productOptions: object[] = [];
  private productOptionValues: object[] =[];
  private subscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menu: MenuService,
    private _cookieService: CookieService,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.productId = params['prod_id'];
      }
    );

    this.menu.getProduct(this.productId).subscribe(
      success => {
        this.setData(success.data.product);
        this.computeTotal();
      },
      error => console.log(error)
    );
  }

  setData(data) {
    this.product = data;
    this.setProductOptions(data.product_options);
    this.image = this.product['image'];
  }

  setProductOptions(options) {
    for(var i = 0; i < options.length; i++) {
      this.productOptions.push(options[i]);
    }
  }

  addQuantity() {
    this.quantity++;
    this.computeTotal();
  }

  subtractQuantity() {
    if(this.quantity > 1) {
      this.quantity--;
      this.computeTotal();
    }
  }

  computeTotal() {
    this.totalPrice = this.additionalPrice + (this.quantity * this.product['price']);
  }

  computeAdditional() {
    this.additionalPrice = 0;
    for(var i = 0; i < this.productOptionValues.length; i++) {
      if(this.productOptionValues[i] !== undefined) {
        this.additionalPrice += this.productOptionValues[i]['price'];
      }
    }
  }

  onChange(value, index) {
    this.productOptionValues[index] = value;
    this.computeAdditional();
    this.computeTotal();
  }

  addToCart() {
    let data = {
      cart_id: this._cookieService.get('buyer_id'),
      product_id: this.product['id'],
      quantity: this.quantity,
      selected_options: this.productOptionValues
    };

    console.log(data);
    this.menu.addToCart(data).subscribe(
      success => {
        if(success.errors === undefined)
          this.openSnackBar('Product successfully added to cart', '');
        else
          this.openSnackBar('There\'s something wrong', '');
      },
      error => console.log(error)
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }
}
