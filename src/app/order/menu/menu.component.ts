import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MenuService, LocationService } from '../../services';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  private lat: string;
  private long: string;
  private brandId: string;
  private loading: boolean = false;
  private categories:object[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menu: MenuService,
    private location: LocationService,
    private _cookieService: CookieService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.brandId = this.activatedRoute.snapshot.queryParams["brand_id"];

    if(this.brandId !== undefined) {
      this._cookieService.put('brand_id', this.brandId);
      this._cookieService.put('buyer_id', this.activatedRoute.snapshot.queryParams["buyer_id"]);
      this.lat = this.activatedRoute.snapshot.queryParams["lat"];
      this.long = this.activatedRoute.snapshot.queryParams["long"];

      console.log(this.lat, this.long);
      this.menu.getAllCategories(this._cookieService.get('brand_id')).subscribe(
        success => {
          this._cookieService.putObject('categories', success.data.categories);
          this.addData(success.data.categories);

          //get location
          this.location.getLocation(this.lat, this.long).subscribe(
            success => console.log(success),
            error => console.log(error)
          );
          this.loading = false;
        },
        error => console.log(error)
      );
    } else {
      if(this._cookieService.getObject('categories') !== undefined) {
        this.addData(this._cookieService.getObject('categories'));
        this.loading = false;
      }
      this.loading = false;
    }
  }

  addData(data) {
    for(var i = 0; i < data.length; i++) {
      this.categories.push(data[i]);
    }
  }

  goToProductList(id) {
    this.router.navigate(['order/category', id]);
  }
}
