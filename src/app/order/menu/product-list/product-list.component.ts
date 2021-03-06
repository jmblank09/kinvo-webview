import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from "rxjs/Rx";

import { MenuService } from '../../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private categoryId: string;
  loading: boolean = false;
  products:object[] = [];
  private subscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menu: MenuService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.categoryId = params['id'];
      }
    );

    this.menu.getProducts(this.categoryId).subscribe(
      success => {
        this.addData(success.data.products);
      },
      error => {
        console.log(error);
        this.loading = true;
      }
    );
  }

  addData(data) {
    for(var i = 0; i < data.length; i++) {
      this.products.push(data[i]);
    }
    this.loading = false;
  }

  goToProduct(id) {
    this.router.navigate(['/order/category/'+this.categoryId+'/product', id]);
  }
}
