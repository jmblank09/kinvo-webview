import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Subscription } from "rxjs/Rx";

import { MenuService, CartService } from '../../../services';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productId: string;
  imageProduct: string = '';
  name: string = '';
  description: string = '';
  price: number;
  quantityProduct: number = 1;
  additionalPriceProduct: number = 0;
  totalPriceProduct: number;
  private selectedProductOption: object;
  selectedProduct: object = {
    name: '',
    description: '',
    price: 0
  };
  productOptions: object[] = [];
  private productOptionValues: object[] =[];
  private subscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menu: MenuService,
    private cart: CartService,
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
    this.selectedProduct = data;
    this.imageProduct = this.selectedProduct['image'];
    this.name = this.selectedProduct['name'];
    this.description = this.selectedProduct['description'];
    this.price = this.selectedProduct['price'];
    this.setProductOptions(data.product_options);
  }

  setProductOptions(options) {
    for(var i = 0; i < options.length; i++) {
      this.productOptions.push(options[i]);
    }
  }

  addQuantity() {
    this.quantityProduct++;
    this.computeTotal();
  }

  subtractQuantity() {
    if(this.quantityProduct > 1) {
      this.quantityProduct--;
      this.computeTotal();
    }
  }

  computeTotal() {
    this.totalPriceProduct = this.additionalPriceProduct + (this.quantityProduct * this.selectedProduct['price']);
  }

  computeAdditional() {
    this.additionalPriceProduct = 0;
    for(var i = 0; i < this.productOptionValues.length; i++) {
      if(this.productOptionValues[i] !== undefined) {
        this.additionalPriceProduct += this.productOptionValues[i]['price'];
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
      product_id: this.selectedProduct['id'],
      quantity: this.quantityProduct,
      selected_options: this.productOptionValues
    };

    this.cart.addToCart(data).subscribe(
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
      duration: 2000
    });
  }
}
