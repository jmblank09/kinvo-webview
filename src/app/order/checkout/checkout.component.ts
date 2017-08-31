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
  loading: boolean = false;
  showDialogDelete: boolean = false;
  showDialogDeleteItem: boolean = false;
  private noFood: boolean = false;
  idToDelete: string;
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
    this.loading = true;
    this.brandId = this.activatedRoute.snapshot.queryParams["brand_id"];
    this.buyerId = this.activatedRoute.snapshot.queryParams["buyer_id"];

    if((this.brandId !== undefined) && (this.buyerId !== undefined)) {
      this._cookieService.put('brand_id', this.brandId);
      this._cookieService.put('buyer_id', this.buyerId);

      this.brand.getBrand(this._cookieService.get('brand_id')).subscribe(
        success => {
          this.title.setTitle(success.data.brand.name);
          this.cart.getCart(this.buyerId, this.brandId).subscribe(
            success => {
              if(success.data.buyer.cart.cart_items > 0) {
                this.addData(success.data.buyer.cart.cart_items);
                this.noFood = false;
              } else {
                this.loading = false;
                this.noFood = true;
              }
            },
            error => console.log(error)
          );
        },
        error => console.log(error)
      );

    } else {
      if((this._cookieService.get('buyer_id') !== undefined) && (this._cookieService.get('brand_id') !== undefined)) {
        this.brand.getBrand(this._cookieService.get('brand_id')).subscribe(
          success => {
            this.title.setTitle(success.data.brand.name);
            this.cart.getCart(this._cookieService.get('buyer_id'), this._cookieService.get('brand_id')).subscribe(
              success => {
                if(success.data.buyer.cart.cart_items.length > 0) {
                  this.addData(success.data.buyer.cart.cart_items);
                  this.noFood = false;
                } else {
                  this.loading = false;
                  this.noFood = true;
                }
              },
              error => console.log(error)
            );
          },
          error => console.log(error)
        );
      }

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

    this.loading = false;
  }

  onDelete(state: string) {
    if(state == 'all')
      this.removeAll();
    else
      this.deleteItem(state)
  }

  removeAll() {
    this.cart.removeAllItemsCart(this._cookieService.get('buyer_id')).subscribe(
      success => {
        this.resetData();
        this.showDialogDelete = !this.showDialogDelete;
        this.noFood = true;
      },
      error => console.log(error)
    );
  }

  deleteItem(cart_item_id) {
    this.cart.removeItemCart(cart_item_id, this._cookieService.get('buyer_id')).subscribe(
      success => {
        this.resetData();
        this.showDialogDeleteItem = !this.showDialogDeleteItem;
        this.loading = true;
        this.cart.getCart(this._cookieService.get('buyer_id'), this._cookieService.get('brand_id')).subscribe(
          success => {
            this._cookieService.putObject('cart_items', success.data.buyer.cart.cart_items);
            if(Object.keys(this._cookieService.getObject('cart_items')).length !== 0) {
              this.addData(success.data.buyer.cart.cart_items);
              this.noFood = false;
            } else {
              this.loading = false;
              this.noFood = true;
            }
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }

  resetData() {
    this._cookieService.remove('cart_items');
    this.cartItems = [];
    this.itemTotalPrice = [];
    this.totalPrice = 0;
  }

  goToMenu() {
    this.router.navigate(['menu']);
  }
}
