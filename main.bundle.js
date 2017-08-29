webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_1__services__["b" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_1__services__["d" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_1__services__["c" /* BrandService */]
        ]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__delivery__ = __webpack_require__("../../../../../src/app/delivery/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialog__ = __webpack_require__("../../../../../src/app/dialog/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order__ = __webpack_require__("../../../../../src/app/order/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//animations


//components




//material design


//routing

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__delivery__["a" /* DeliveryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__order__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__order__["b" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__order__["c" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__order__["d" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__order__["e" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__order__["f" /* ReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dialog__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_10__order__["g" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_10__order__["h" /* ProductListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["a" /* CookieModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["f" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["h" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["i" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["j" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["k" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["l" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["m" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["n" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["o" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["p" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["q" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["r" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["s" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["t" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["u" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["v" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["w" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["x" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["y" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["z" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["A" /* MdSortModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["B" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["C" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["D" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["E" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delivery__ = __webpack_require__("../../../../../src/app/delivery/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__("../../../../../src/app/order/index.ts");
/* unused harmony export APP_ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });



var APP_ROUTES = [
    { path: 'review', component: __WEBPACK_IMPORTED_MODULE_2__order__["f" /* ReviewComponent */], pathMatch: 'full' },
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderComponent */], children: __WEBPACK_IMPORTED_MODULE_2__order__["i" /* ORDER_ROUTES */] },
    { path: 'delivery', component: __WEBPACK_IMPORTED_MODULE_1__delivery__["a" /* DeliveryComponent */], pathMatch: 'full' },
    { path: '', redirectTo: 'order', pathMatch: 'full' },
    { path: '**', redirectTo: 'order', pathMatch: 'full' },
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/delivery/delivery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.container {\n  height: 100vh;\n  text-align: center;\n  width: 100%;\n}\n\ndiv.first-input {\n  padding-top: 2em;\n  margin-bottom: 1em;\n}\n\ndiv.second-input {\n  margin-bottom: 1.5em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delivery/delivery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"example-form\" (ngSubmit)=\"onSubmit()\">\n    <!-- Date -->\n    <div class=\"first-input\">\n      <md-input-container class=\"example-full-width\">\n        <input\n          mdInput\n          [mdDatepicker]=\"picker\"\n          placeholder=\"Choose a date\"\n          [(ngModel)]=\"temp.date\"\n          name=\"date\" />\n        <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n      </md-input-container>\n      <md-datepicker touchUi=\"true\" #picker></md-datepicker>\n    </div>\n    <!-- Time -->\n    <div class=\"second-input\">\n      <md-input-container class=\"example-full-width\">\n        <input\n          mdInput\n          placeholder=\"Choose a time\"\n          type=\"time\"\n          [(ngModel)]=\"temp.time\"\n          name=\"time\" />\n      </md-input-container>\n    </div>\n    <!-- Submit button -->\n    <div class=\"submit\">\n      <button md-raised-button type=\"submit\">Set your order</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/delivery/delivery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeliveryComponent = (function () {
    function DeliveryComponent(title) {
        this.title = title;
        this.currentDate = new Date();
        this.temp = {
            date: this.currentDate,
            time: this.currentDate.getHours() + ':' + this.currentDate.getMinutes()
        };
    }
    DeliveryComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Delivery');
    };
    DeliveryComponent.prototype.onSubmit = function () {
        var data = {
            date: (this.temp.date.getUTCMonth() + 1)
                + '/' + (this.temp.date.getUTCDate() + 1)
                + '/' + this.temp.date.getUTCFullYear(),
            time: this.temp.time
        };
        console.log(data);
    };
    return DeliveryComponent;
}());
DeliveryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-delivery',
        template: __webpack_require__("../../../../../src/app/delivery/delivery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/delivery/delivery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */]) === "function" && _a || Object])
], DeliveryComponent);

var _a;
//# sourceMappingURL=delivery.component.js.map

/***/ }),

/***/ "../../../../../src/app/delivery/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__delivery_component__ = __webpack_require__("../../../../../src/app/delivery/delivery.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__delivery_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n}\n\n.dialog {\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 0;\n  margin: auto;\n  margin-top: 50%;\n  width: 80%;\n  background-color: #fff;\n  border-radius: 5px;\n  text-align: left;\n  box-shadow: 0 1px 1px rgba(0,0,0,.08);\n}\n\n@media (min-width: 768px) {\n  .dialog {\n    top: 40px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\n  <ng-content></ng-content>\n</div>\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    return DialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], DialogComponent.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Boolean)
], DialogComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]) === "function" && _a || Object)
], DialogComponent.prototype, "visibleChange", void 0);
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-dialog',
        template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialog/dialog.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('dialog', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(180)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(180, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], DialogComponent);

var _a;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialog/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dialog_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/order/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding: 0px;\n  margin: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.clearfix {\n  height: 42px;\n  clear: both;\n}\n\n.wrapper {\n  height: 81.4%;\n  width: 100%;\n  overflow-y: scroll;\n}\n\n.title h1 {\n  text-align: center;\n  font-family: Roboto,sans-serif;\n  color: #666;\n  padding: 10px;\n  margin: 0px;\n  font-weight: 400;\n  background: #F5F5F5;\n  letter-spacing: 1px;\n}\n\n.title {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.empty {\n  text-align: center;\n  font-family: Roboto,sans-serif;\n  margin-top: 3em;\n}\n\n.empty h3, .empty h2 {\n  color: #333;\n}\n\n.empty h3 {\n  font-weight: 300;\n  margin: 0px;\n}\n\n.empty h2 {\n  font-weight: 500;\n  margin: .5em 0em 1.5em;\n}\n\n.add-food button, .clear button {\n  background: #3da6ff;\n  color: #fff;\n  text-transform: uppercase;\n  border-radius: 50px;\n  letter-spacing: 1px;\n}\n\n.product {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  font-family: Roboto,sans-serif;\n  border-bottom: 1px solid #ecf0f3;\n}\n\n.image {\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.image img {\n  height: 60px;\n  border: 1px solid #ecf0f3;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.description {\n  width: 100%;\n}\n\n.product-name h3 {\n  font-size: 16px;\n  font-weight: 400;\n  color: #6c7280;\n  margin: 11px 0 0;\n}\n\n.product-price {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-top: 3px;\n}\n\n.product-quantity h5 {\n  font-size: 13px;\n  font-weight: 500;\n  color: #c8cdd8;\n  margin: 0;\n}\n\n.product-total h4 {\n  font-size: 14px;\n  font-weight: 700;\n  color: #6c7280;\n  margin: 0;\n  padding-right: 10px;\n}\n\n.delete {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n\n.delete h5 {\n  color: #e87c7c;\n  margin: 8px 0 0;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: .05em;\n  text-decoration: underline;\n  text-align: right;\n  padding-right: 10px;\n}\n\n.clear {\n  text-align: center;\n  margin: 1em 0em 2.5em;\n}\n\n.clear button {\n  background: #e87c7c;\n}\n\n.total-container {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.total-bill {\n  width: 92%;\n  border-top: 1px solid #333;\n  font-family: Roboto,sans-serif;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  color: #525660;\n}\n\n/* loading */\n@-webkit-keyframes s_rotate1 {\n  0% {\n    -webkit-transform: rotate(-360deg);\n  }\n}\n@keyframes s_rotate1 {\n  0% {\n    -webkit-transform: rotate(-360deg);\n  }\n}\n@-webkit-keyframes s_rotate2 {\n  0%, 50% {\n    -webkit-transform: rotate(-360deg);\n  }\n}\n@keyframes s_rotate2 {\n  0%, 50% {\n    -webkit-transform: rotate(-360deg);\n  }\n}\n@-webkit-keyframes s_grow {\n  0% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes s_grow {\n  0% {\n    stroke-dashoffset: 0;\n  }\n}\n.spinner {\n  margin: 50% auto 0px;\n  width: 8rem;\n  height: 8rem;\n  -webkit-animation: s_rotate1 4.5s infinite linear;\n          animation: s_rotate1 4.5s infinite linear;\n}\n.spinner svg {\n  -webkit-animation: s_rotate2 2s infinite linear;\n          animation: s_rotate2 2s infinite linear;\n}\n.spinner path {\n  fill: none;\n  stroke: #3da6ff;\n  stroke-width: 10;\n  stroke-dasharray: 600;\n  stroke-dashoffset: 580;\n  -webkit-animation: s_grow 1s alternate infinite linear;\n          animation: s_grow 1s alternate infinite linear;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!loading\">\n  <div class=\"clearfix\"></div>\n  <div class=\"title\">\n    <h1>Order Summary</h1>\n  </div>\n  <div class=\"wrapper\">\n    <div *ngIf=\"!noFood\">\n      <div class=\"product\" *ngFor=\"let cartItem of cartItems; let i = index\">\n        <div class=\"image\">\n          <img *ngIf=\"cartItem.product.image != '' \"src=\"product.image\"/>\n          <img *ngIf=\"cartItem.product.image == ''\" src=\"../../../assets/NoPicAvailable.png\"/>\n        </div>\n        <div class=\"description\">\n          <div class=\"product-name\">\n            <h3>{{cartItem.product.name}}</h3>\n          </div>\n          <div class=\"product-price\">\n            <div class=\"product-quantity\">\n              <h5><span>&#8369; </span>{{cartItem.product.price | number : '1.2'}} <span> x </span>{{cartItem.quantity}}</h5>\n            </div>\n            <div class=\"product-total\">\n              <h4><span>&#8369; </span>{{itemTotalPrice[i] | number : '1.2'}}</h4>\n            </div>\n          </div>\n          <div class=\"delete\">\n            <h5 (click)=\"deleteItem()\">Remove</h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"clear\">\n        <button md-raised-button (click)=\"removeAll()\">Remove all</button>\n      </div>\n      <div class=\"total-container\">\n        <div class=\"total-bill\">\n          <div class=\"total-title\">\n            <h3>Total Price</h3>\n          </div>\n          <div class=\"total-price\">\n            <h3><span>&#8369; </span>{{totalPrice | number : '1.2'}}</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- empty food tray -->\n    <div class =\"empty\" *ngIf=\"noFood\">\n      <div class=\"detail\">\n        <h3>You do not have a food in your tray.</h3>\n        <h2>Go Order Now!</h2>\n      </div>\n      <div class=\"add-food\">\n        <button md-raised-button (click)=\"goToMenu()\">Add a Food</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- loading -->\n<div class=\"spinner\" *ngIf=\"loading\">\n  <svg viewBox=\"-10 -10 220 220\">\n    <path d=\"M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z\"></path>\n  </svg>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/order/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutComponent = (function () {
    function CheckoutComponent(router, activatedRoute, title, _cookieService, cart, brand) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this._cookieService = _cookieService;
        this.cart = cart;
        this.brand = brand;
        this.loading = false;
        this.noFood = false;
        this.totalPrice = 0;
        this.cartItems = [];
        this.itemTotalPrice = [];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.brandId = this.activatedRoute.snapshot.queryParams["brand_id"];
        this.buyerId = this.activatedRoute.snapshot.queryParams["buyer_id"];
        if ((this.brandId !== undefined) && (this.buyerId !== undefined)) {
            this.cart.getCart(this.buyerId, this.brandId).subscribe(function (success) {
                _this._cookieService.putObject('cart_items', success.data.buyer.cart.cart_items);
                _this.addData(success.data.buyer.cart.cart_items);
                _this.brand.getBrand(_this.brandId).subscribe(function (success) {
                    _this.title.setTitle(success.data.brand.name);
                    _this.loading = false;
                }, function (error) { return console.log(error); });
            }, function (error) { return console.log(error); });
            this.loading = false;
        }
        else {
            if ((this._cookieService.get('buyer_id') !== undefined) && (this._cookieService.get('brand_id') !== undefined)) {
                this.cart.getCart(this._cookieService.get('buyer_id'), this._cookieService.get('brand_id')).subscribe(function (success) {
                    _this._cookieService.putObject('cart_items', success.data.buyer.cart.cart_items);
                    _this.addData(success.data.buyer.cart.cart_items);
                    _this.brand.getBrand(_this._cookieService.get('brand_id')).subscribe(function (success) {
                        _this.title.setTitle(success.data.brand.name);
                        _this.loading = false;
                    }, function (error) { return console.log(error); });
                }, function (error) { return console.log(error); });
            }
            this.loading = false;
        }
    };
    CheckoutComponent.prototype.addData = function (data) {
        for (var i = 0; i < data.length; i++) {
            var total = data[i].quantity * data[i].product.price;
            this.totalPrice += total;
            this.itemTotalPrice.push(total);
            this.cartItems.push(data[i]);
        }
    };
    CheckoutComponent.prototype.removeAll = function () {
        console.log('remove all');
    };
    CheckoutComponent.prototype.deleteItem = function () {
        console.log('delete item');
    };
    CheckoutComponent.prototype.goToMenu = function () {
        this.router.navigate(['menu']);
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../src/app/order/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services__["d" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["d" /* CartService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services__["c" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["c" /* BrandService */]) === "function" && _f || Object])
], CheckoutComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/checkout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkout_component__ = __webpack_require__("../../../../../src/app/order/checkout/checkout.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__checkout_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/order/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".submit {\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n}\n\n.submit button {\n  width: 100%;\n  text-align: center;\n  background: #81C784;\n  color: #fff;\n  font-family: Roboto,sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 0px;\n}\n\n\n.card-header-right, .button-component button {\n  float: right;\n}\n\n.card-header-right button, .button-component button, .delete-button-wrapper button {\n  background: #fff;\n  border: 1px solid #ecf0f3;\n  font-family: Roboto,sans-serif;\n  color: #3da6ff;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  padding: 10px;\n  letter-spacing: 0.6px;\n}\n\n.card-header-right button:hover, .button-component button:hover, .delete-button-wrapper button:hover {\n  background: #f3f2f2;\n}\n\n.chatbot-actions i.connect, .button-component button, .delete-button-wrapper button.cancel-button {\n  color: #2ECC71;\n}\n\n.chatbot-actions i.delete, .delete-button-wrapper button.delete-button {\n  color: #81C784;\n}\n\n.form {\n  width: 90%;\n  height: 100%;\n  padding: 16px;\n  vertical-align: middle;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n.form-header h1 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 300;\n  font-family: Roboto,sans-serif;\n}\n\n.form-header {\n  border-bottom: 1px solid #e7e4e4;\n  padding: 5px 0px 15px;\n}\n\n.form-body {\n  width: 100%;\n  color: #373C44;\n  height: 100%;\n  padding: 25px 0px;\n}\n\n.textbox-component {\n  margin-bottom: 16px;\n  padding: 0px 15px 15px;\n}\n\n.textbox-component label {\n  display: block;\n  color: #4f5863;\n  font-weight: 400;\n  font-size: 14px;\n  text-align: left;\n}\n\n.textbox-component input {\n  font-size: 14px;\n  width: 100%;\n  height: 40px;\n  background: #fff;\n  border-radius: 3px;\n  border: 1px solid #D9D9D9;\n  box-shadow: inset 0 1px 1px 0 rgba(0,0,0,0.03);\n  padding: 8px 10px 10px;\n  color: #777B86;\n}\n\n.textbox-component input:focus, .textbox-component input:focus  {\n  outline: none;\n  box-shadow: inset 0 0 0 1px #3da6ff;\n}\n\n.button-component {\n  border-top: 1px solid #e7e4e4;\n  height: 100%;\n  padding: 15px 0px 15px;\n  width: 100%;\n}\n\n.button-component button:focus{\n  outline-color: #2ECC71;\n}\n\n.delete {\n  border: none;\n}\n\n.delete h1 {\n  text-align: center;\n  font-size: 16px;\n}\n\n.delete-body {\n  padding: 10px 0px;\n}\n\n.delete-button-wrapper {\n  text-align: center;\n}\n\n.delete-button-wrapper button {\n  padding: 10px 15px;\n}\n\n.delete-button-wrapper button.cancel-button {\n  border: 1px solid #e7e4e4;\n  margin-right: 2em;\n  color: #9196a1;\n}\n\n.delete-button-wrapper button.cancel-button:focus {\n  outline: none;\n}\n\n.delete-button-wrapper button.delete-button:focus{\n  outline-color: #81C784;\n}\n\n.delete-button-wrapper button.delete-button {\n  border: 1px solid #81C784;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"submit\">\n  <button md-button (click)=\"showDialog = !showDialog\">Checkout</button>\n</div>\n\n<!-- Dialog for delete -->\n<app-dialog [(visible)]=\"showDialog\">\n  <div class=\"form\">\n    <div class=\"form-header delete\">\n      <h1>Are you sure you want to checkout?</h1>\n    </div>\n    <div class=\"form-body delete-body\">\n      <div class=\"delete-button-wrapper\">\n        <button type=\"button\" class=\"btn-create-chatbot cancel-button\" (click)=\"showDialog = !showDialog;\">No</button>\n        <button type=\"button\" class=\"btn-create-chatbot delete-button\" (click)=\"onSubmit()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</app-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/order/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(router) {
        this.router = router;
        this.showDialog = false;
    }
    FooterComponent.prototype.onSubmit = function () {
        // this.router.navigate(['/review']);
        console.log('close window');
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/order/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/footer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__("../../../../../src/app/order/footer/footer.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/order/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__order_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout__ = __webpack_require__("../../../../../src/app/order/checkout/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__checkout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__("../../../../../src/app/order/menu/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__menu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__menu__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__menu__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar__ = __webpack_require__("../../../../../src/app/order/navbar/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__navbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer__ = __webpack_require__("../../../../../src/app/order/footer/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review__ = __webpack_require__("../../../../../src/app/order/review/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__review__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_routes__ = __webpack_require__("../../../../../src/app/order/order.routes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__order_routes__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/order/menu/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_component__ = __webpack_require__("../../../../../src/app/order/menu/menu.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__menu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product__ = __webpack_require__("../../../../../src/app/order/menu/product/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__product__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list__ = __webpack_require__("../../../../../src/app/order/menu/product-list/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__product_list__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/order/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding: 0px;\n  margin: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.clearfix {\n  height: 42px;\n  clear: both;\n}\n\n.wrapper {\n  height: 81.4%;\n  width: 100%;\n  overflow-y: scroll;\n}\n\n.category {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  vertical-align: middle;\n  border-bottom: 1px solid #ccc;\n  overflow-y: scroll;\n}\n\n.category h3 {\n  font-family: Roboto,sans-serif;\n  color: #333;\n  font-weight: 300;\n}\n\n.title h1 {\n  text-align: center;\n  font-family: Roboto,sans-serif;\n  color: #666;\n  padding: 10px;\n  margin: 0px;\n  font-weight: 400;\n  background: #F5F5F5;\n  letter-spacing: 1px;\n}\n\n.title {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.wrapper a {\n  text-decoration: none;\n  -webkit-tap-highlight-color: #fafafa;\n}\n\n/* loading */\n@-webkit-keyframes s_rotate1 {\n  0% {\n    -webkit-transform: rotate(-360deg);\n  }\n}\n@keyframes s_rotate1 {\n  0% {\n    -webkit-transform: rotate(-360deg);\n  }\n}\n@-webkit-keyframes s_rotate2 {\n  0%, 50% {\n    -webkit-transform: rotate(-360deg);\n  }\n}\n@keyframes s_rotate2 {\n  0%, 50% {\n    -webkit-transform: rotate(-360deg);\n  }\n}\n@-webkit-keyframes s_grow {\n  0% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes s_grow {\n  0% {\n    stroke-dashoffset: 0;\n  }\n}\n.spinner {\n  margin: 50% auto 0px;\n  width: 8rem;\n  height: 8rem;\n  -webkit-animation: s_rotate1 4.5s infinite linear;\n          animation: s_rotate1 4.5s infinite linear;\n}\n.spinner svg {\n  -webkit-animation: s_rotate2 2s infinite linear;\n          animation: s_rotate2 2s infinite linear;\n}\n.spinner path {\n  fill: none;\n  stroke: #3da6ff;\n  stroke-width: 10;\n  stroke-dasharray: 600;\n  stroke-dashoffset: 580;\n  -webkit-animation: s_grow 1s alternate infinite linear;\n          animation: s_grow 1s alternate infinite linear;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!loading\">\n  <div class=\"clearfix\"></div>\n  <div class=\"title\">\n    <h1>Categories</h1>\n  </div>\n  <div class=\"wrapper\">\n    <a (click)=\"goToProductList(category.id)\" *ngFor=\"let category of categories\">\n      <div class=\"category\" >\n        <h3>{{category.name}}</h3>\n      </div>\n    </a>\n  </div>\n</div>\n<div class=\"spinner\" *ngIf=\"loading\">\n  <svg viewBox=\"-10 -10 220 220\">\n    <path d=\"M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z\"></path>\n  </svg>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/order/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = (function () {
    function MenuComponent(router, activatedRoute, title, _cookieService, menu, location, brand) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this._cookieService = _cookieService;
        this.menu = menu;
        this.location = location;
        this.brand = brand;
        this.loading = false;
        this.categories = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.brandId = this.activatedRoute.snapshot.queryParams["brand_id"];
        if (this.brandId !== undefined) {
            this._cookieService.put('brand_id', this.brandId);
            this._cookieService.put('buyer_id', this.activatedRoute.snapshot.queryParams["buyer_id"]);
            this.lat = this.activatedRoute.snapshot.queryParams["lat"];
            this.long = this.activatedRoute.snapshot.queryParams["long"];
            //get categories
            this.menu.getAllCategories(this._cookieService.get('brand_id')).subscribe(function (success) {
                _this._cookieService.putObject('categories', success.data.categories);
                _this.addData(success.data.categories);
                //set title
                _this.brand.getBrand(_this._cookieService.get('brand_id')).subscribe(function (success) {
                    _this.title.setTitle(success.data.brand.name);
                    //get location
                    _this.location.getLocation(_this.lat, _this.long).subscribe(function (success) {
                        _this._cookieService.put('location', success.results[1].address_components[2].long_name);
                        _this.loading = false;
                    }, function (error) {
                        console.log(error);
                        _this.loading = false;
                    });
                }, function (error) { return console.log(error); });
            }, function (error) { return console.log(error); });
            this.loading = false;
        }
        else {
            if (this._cookieService.getObject('categories') !== undefined) {
                this.addData(this._cookieService.getObject('categories'));
                this.brand.getBrand(this._cookieService.get('brand_id')).subscribe(function (success) {
                    _this.title.setTitle(success.data.brand.name);
                    _this.loading = false;
                }, function (error) { return console.log(error); });
            }
            this.loading = false;
        }
    };
    MenuComponent.prototype.addData = function (data) {
        for (var i = 0; i < data.length; i++) {
            this.categories.push(data[i]);
        }
    };
    MenuComponent.prototype.goToProductList = function (id) {
        this.router.navigate(['order/category', id]);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/order/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["a" /* MenuService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services__["b" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["b" /* LocationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services__["c" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["c" /* BrandService */]) === "function" && _g || Object])
], MenuComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/menu/product-list/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_list_component__ = __webpack_require__("../../../../../src/app/order/menu/product-list/product-list.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__product_list_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/order/menu/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding: 0px;\n  margin: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.clearfix {\n  height: 42px;\n  clear: both;\n}\n\n.wrapper {\n  height: 81.4%;\n  width: 100%;\n  overflow-y: scroll;\n}\n\n.category {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  vertical-align: middle;\n  border-bottom: 1px solid #ccc;\n  overflow-y: scroll;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n}\n\n.title h1 {\n  text-align: center;\n  font-family: Roboto,sans-serif;\n  color: #666;\n  padding: 10px;\n  margin: 0px;\n  font-weight: 400;\n  background: #F5F5F5;\n  letter-spacing: 1px;\n}\n\n.title {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.wrapper a {\n  text-decoration: none;\n  -webkit-tap-highlight-color: #fafafa;\n}\n\n.image {\n  padding: 10px;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  height: 93px;\n}\n\n.image img {\n  width: 100px;\n  height: 90px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.details {\n  height: 93px;\n  text-align: left;\n  font-family: Roboto,sans-serif;\n  padding: 2px;\n  width: 100%;\n  padding-top: 10px;\n}\n\n.details h3 {\n  color: #333;\n  font-size: 1.1em;\n  font-weight: 300;\n  text-transform: none;\n  margin: 0px;\n  width: auto;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.details h6 {\n  font-size: 12px;\n  font-weight: 500;\n  color: #b4bbcb;\n  margin: 8px 0px 0px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  text-justify: inter-word;\n}\n\n.details p {\n  margin: 0px;\n  margin-top: 5px;\n  width: auto;\n  font-size: 1em;\n  color: #6c7280;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/menu/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"clearfix\"></div>\n  <div class=\"title\">\n    <h1>Products</h1>\n  </div>\n  <div class=\"wrapper\">\n    <a (click)=\"goToProduct(product.id)\" *ngFor=\"let product of products\">\n      <div class=\"category\" >\n        <div class=\"image\">\n          <img *ngIf=\"product.image != '' \" src=\"product.image\"/>\n          <img *ngIf=\"product.image == '' \" src=\"../../../../assets/NoPicAvailable.png\"/>\n        </div>\n        <div class=\"details\">\n          <h3>{{product.name}}</h3>\n          <p><span>&#8369;</span> {{product.price | number : '1.2'}}</p>\n          <h6>{{product.description}}</h6>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/order/menu/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = (function () {
    function ProductListComponent(router, activatedRoute, menu) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.menu = menu;
        this.products = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this.categoryId = params['id'];
        });
        this.menu.getProducts(this.categoryId).subscribe(function (success) {
            _this.addData(success.data.products);
        }, function (error) { return console.log(error); });
    };
    ProductListComponent.prototype.addData = function (data) {
        for (var i = 0; i < data.length; i++) {
            this.products.push(data[i]);
        }
    };
    ProductListComponent.prototype.goToProduct = function (id) {
        this.router.navigate(['/order/category/' + this.categoryId + '/product', id]);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/order/menu/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/menu/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* MenuService */]) === "function" && _c || Object])
], ProductListComponent);

var _a, _b, _c;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/menu/product/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_component__ = __webpack_require__("../../../../../src/app/order/menu/product/product.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__product_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/order/menu/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding: 0px;\n  margin: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.clearfix {\n  height: 42px;\n  clear: both;\n}\n\n.wrapper {\n  height: 88.4%;\n  width: 100%;\n  overflow-y: scroll;\n  font-family: Roboto,sans-serif;\n}\n\n.image {\n  height: auto;\n  padding: 10px;\n  text-align: center;\n}\n\n.image img {\n  width: 70%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.title h1 {\n  color: #333;\n  font-size: 22px;\n  text-align: center;\n  font-weight: 500;\n  margin: 5px 0px 8px;\n}\n\n.description, .total {\n  padding: 0 .8em;\n}\n\n.description h3 {\n  background: #f2f2f2;\n  padding: .8em;\n  border-radius: 5px;\n  color: #6c7280;\n  font-size: 0.9em;\n  font-weight: 300;\n  margin: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack:distribute;\n      justify-content:space-around;\n  text-align:center;\n  text-justify:auto;\n}\n\n.quantity, .options {\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  margin: 1em 0em;\n  text-align: center;\n  padding: 0.5em 0em;\n}\n\n.quantity h3, .options h3 {\n  margin: 10px 0px 0px;\n  color: #555e77;\n  letter-spacing: 1px;\n  font-weight: 500;\n  font-size: 1.1em;\n  text-transform: uppercase;\n}\n\n.quantity-adjustment, .option-items {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  padding: 0px 1em;\n  margin: 1em 0em;\n}\n\n.quantity-adjustment button {\n  background: #3da6ff;\n  color: #fff;\n  font-size: 1em;\n  padding: 0px;\n  min-width: 50px;\n}\n\n.quantity-adjustment input {\n  width: 5em;\n  border: 1px solid #ecf0f3;\n  border-radius: 8px;\n  text-align: center;\n  padding: 10px;\n  font-size: 1em;\n  font-weight: 700;\n}\n\n.quantity-adjustment input:focus {\n  outline: none;\n  box-shadow: inset 0 0 0 1px #3da6ff;\n  transition: all .1s ease-in;\n}\n\n.options {\n  margin: 1.5em 0em 1em;\n}\n\n.option-items {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 0em;\n}\n\n.items {\n  margin: 0em 0em .8em;\n  display: block;\n  width: 100%;\n  border: 1px solid #ecf0f3;\n  border-radius: 8px;\n  text-align: center;\n  padding: 10px;\n  width: 90%;\n}\n\n.total {\n  width: 100%;\n  margin: 1.5em 0em 1.5em;\n}\n\n.total h2 {\n  margin: 0px;\n  text-align: left;\n  color: #acb0b9;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.total h3 {\n  margin: 0px;\n  text-align: right;\n  color: #525660;\n  font-size: 20px;\n  font-weight: 700;\n  font-weight: 500;\n}\n\n.submit {\n  text-align: center;\n  margin-bottom: 1.5em;\n}\n\n.submit button {\n  background: #3da6ff;\n  color: #fff;\n  text-transform: uppercase;\n  border-radius: 50px;\n  font-family: Roboto,sans-serif;\n  letter-spacing: 1px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/menu/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"clearfix\"></div>\n  <div class=\"wrapper\">\n    <div class=\"image\">\n        <img *ngIf=\"product?.image != '' \"src=\"product?.image\"/>\n        <img *ngIf=\"product?.image == '' \"src=\"../../../../assets/NoPicAvailable.png\"/>\n    </div>\n    <div class=\"title\">\n      <h1>{{product?.name}}</h1>\n    </div>\n    <div class=\"description\">\n      <h3>{{product?.description}}</h3>\n    </div>\n    <div class=\"quantity\">\n      <h3>Quantity</h3>\n      <div class=\"quantity-adjustment\">\n        <button md-raised-button (click)=\"subtractQuantity()\">-</button>\n        <input type=\"number\" [(ngModel)]=\"quantity\" min=\"1\" name=\"quantity\"/>\n        <button md-raised-button (click)=\"addQuantity()\">+</button>\n      </div>\n    </div>\n    <div class=\"options\">\n      <h3>Options</h3>\n      <div class=\"option-items\">\n        <md-select\n          placeholder=\"{{productOption.name}}\"\n          class=\"items\"\n          *ngFor=\"let productOption of productOptions; let i = index;\"\n          (change)=\"onChange($event.value, i)\">\n          <md-option\n            *ngFor=\"let productOptionValue of productOption.product_option_values\"\n            [value]=\"productOptionValue\">\n              <span>{{productOptionValue.value}} - &#8369; {{productOptionValue.price | number : '1.2'}}</span>\n          </md-option>\n        </md-select>\n      </div>\n    </div>\n    <table class=\"total\">\n      <tr class=\"price\">\n        <td>\n          <h2>Price</h2>\n        </td>\n        <td>\n          <h3><span>&#8369;</span> {{product?.price | number : '1.2'}}</h3>\n        </td>\n      </tr>\n      <tr class=\"additional-price\">\n        <td>\n          <h2>Additional Price</h2>\n        </td>\n        <td>\n          <h3><span>&#8369;</span> {{additionalPrice | number : '1.2'}}</h3>\n        </td>\n      </tr>\n      <tr class=\"total-price\">\n        <td>\n          <h2>Total Price</h2>\n        </td>\n        <td>\n          <h3><span>&#8369;</span> {{totalPrice | number : '1.2'}}</h3>\n        </td>\n      </tr>\n    </table>\n    <div class=\"submit\">\n      <button md-raised-button (click)=\"addToCart()\">Add To Cart</button>\n    <div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/order/menu/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = (function () {
    function ProductComponent(router, activatedRoute, menu, _cookieService, snackBar) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.menu = menu;
        this._cookieService = _cookieService;
        this.snackBar = snackBar;
        this.quantity = 1;
        this.additionalPrice = 0;
        this.productOptions = [];
        this.productOptionValues = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this.productId = params['prod_id'];
        });
        this.menu.getProduct(this.productId).subscribe(function (success) {
            _this.setData(success.data.product);
            _this.computeTotal();
        }, function (error) { return console.log(error); });
    };
    ProductComponent.prototype.setData = function (data) {
        this.product = data;
        this.setProductOptions(data.product_options);
    };
    ProductComponent.prototype.setProductOptions = function (options) {
        for (var i = 0; i < options.length; i++) {
            this.productOptions.push(options[i]);
        }
    };
    ProductComponent.prototype.addQuantity = function () {
        this.quantity++;
        this.computeTotal();
    };
    ProductComponent.prototype.subtractQuantity = function () {
        if (this.quantity > 1) {
            this.quantity--;
            this.computeTotal();
        }
    };
    ProductComponent.prototype.computeTotal = function () {
        this.totalPrice = this.additionalPrice + (this.quantity * this.product['price']);
    };
    ProductComponent.prototype.computeAdditional = function () {
        this.additionalPrice = 0;
        for (var i = 0; i < this.productOptionValues.length; i++) {
            if (this.productOptionValues[i] !== undefined) {
                this.additionalPrice += this.productOptionValues[i]['price'];
            }
        }
    };
    ProductComponent.prototype.onChange = function (value, index) {
        this.productOptionValues[index] = value;
        this.computeAdditional();
        this.computeTotal();
    };
    ProductComponent.prototype.addToCart = function () {
        var _this = this;
        var data = {
            cart_id: this._cookieService.get('buyer_id'),
            product_id: this.product['id'],
            quantity: this.quantity,
            selected_options: this.productOptionValues
        };
        console.log(data);
        this.menu.addToCart(data).subscribe(function (success) {
            if (success.errors === undefined)
                _this.openSnackBar('Product successfully added to cart', '');
            else
                _this.openSnackBar('There\'s something wrong', '');
        }, function (error) { return console.log(error); });
    };
    ProductComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000
        });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/order/menu/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/menu/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["a" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSnackBar */]) === "function" && _e || Object])
], ProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/navbar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_component__ = __webpack_require__("../../../../../src/app/order/navbar/navbar.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__navbar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/order/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  background: #e6e6e6;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  position: fixed;\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.navbar-container > div {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  font-family: Arial;\n  -webkit-tap-highlight-color: #d9d9d9;\n  cursor: pointer;\n  padding: 12px 8px;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: Roboto,sans-serif;\n}\n\n.navbar-container > div > a {\n  text-decoration: none;\n  color: #4d4d4d;\n}\n\n.navbar-container > div > a > i, .navbar-container > div > i {\n  font-size: 16px;\n  color: #4d4d4d;\n  margin-right: 2px;\n}\n\n.navbar-container > div > a > span, .navbar-container > div > span {\n  font-size: 12px;\n  color: #4d4d4d;\n  font-family: Roboto,sans-serif;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-container\">\n  <div class=\"nav-back\" (click)=\"Back()\">\n    <i class=\"fa fa-backward\" aria-hidden=\"true\"></i>\n    <span>back</span>\n  </div>\n  <div class=\"nav-menu\">\n    <a [routerLink]=\"['menu']\">\n      <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>\n      <span>menu</span>\n    </a>\n  </div>\n  <div class=\"nav-cart\">\n    <a [routerLink]=\"['cart']\">\n      <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n      <span>cart</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/order/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(location) {
        this.location = location;
    }
    NavbarComponent.prototype.Back = function () {
        this.location.back();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/order/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header, .container, .footer {\n  width: 100%;\n  height: auto;\n  clear: both;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  display: block;\n}\n.header {\n  height: 42px;\n  top: 0px;\n  position: fixed;\n  display: block;\n}\n.footer {\n  bottom: 0px;\n  height: 36px;\n  position: fixed;\n  display: block;\n}\n\n.container {\n  display: block;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <app-navbar></app-navbar>\n</div>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<div class=\"footer\">\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-order',
        template: __webpack_require__("../../../../../src/app/order/order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/order.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrderComponent);

//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu__ = __webpack_require__("../../../../../src/app/order/menu/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout__ = __webpack_require__("../../../../../src/app/order/checkout/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ORDER_ROUTES; });


var ORDER_ROUTES = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'category/:id/product/:prod_id', component: __WEBPACK_IMPORTED_MODULE_0__menu__["b" /* ProductComponent */] },
    { path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_0__menu__["c" /* ProductListComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_0__menu__["a" /* MenuComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_1__checkout__["a" /* CheckoutComponent */] },
];
//# sourceMappingURL=order.routes.js.map

/***/ }),

/***/ "../../../../../src/app/order/review/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__review_component__ = __webpack_require__("../../../../../src/app/order/review/review.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__review_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/order/review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding: 0px;\n  margin: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.title h1 {\n  text-align: center;\n  font-family: Roboto,sans-serif;\n  color: #666;\n  padding: 10px;\n  margin: 0px;\n  font-weight: 400;\n  background: #F5F5F5;\n  letter-spacing: 1px;\n}\n\n.title {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.details {\n  height: auto;\n  overflow-y: scroll;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.receipt {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.receipt table {\n  width: 92%;\n  font-family: Roboto,sans-serif;\n  text-align: center;\n  margin: .8em 0em 1.5em;\n}\n\ntable th {\n  padding-bottom: 8px;\n  color: #6a6f7c;\n}\n\ntable td {\n  color: #333;\n}\n\ntd.price {\n  width: 85px;\n}\n\ntd.description {\n  text-align: center;\n}\n\n.total-container {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.total-bill {\n  width: 92%;\n  border-top: 1px solid #333;\n  font-family: Roboto,sans-serif;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  color: #333;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title\">\n    <h1>Order History</h1>\n  </div>\n  <div class=\"details\">\n    <div class=\"receipt\">\n      <table>\n        <tr>\n          <th class=\"quantity\">Qty</th>\n          <th>Description</th>\n          <th>Price</th>\n        </tr>\n        <tr>\n          <td valign=\"top\">10</td>\n          <td class=\"description\" valign=\"top\">Our Best Fried Chicken</td>\n          <td class=\"price\" valign=\"top\"><span>&#8369;</span>100.00</td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"total-container\">\n      <div class=\"total-bill\">\n        <div class=\"total-title\">\n          <h3>Total Price</h3>\n        </div>\n        <div class=\"total-price\">\n          <h3><span>&#8369; </span>1000.000</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/order/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewComponent = (function () {
    function ReviewComponent(title) {
        this.title = title;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Order History');
    };
    return ReviewComponent;
}());
ReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-review',
        template: __webpack_require__("../../../../../src/app/order/review/review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/review/review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */]) === "function" && _a || Object])
], ReviewComponent);

var _a;
//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/brand.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrandService = (function () {
    function BrandService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.url = __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* AppSettings */].API_URL;
    }
    BrandService.prototype.getBrand = function (id) {
        var graphql = "{\n                    brand(id:" + id + ") {\n                      name\n                      image\n                    }\n                  }";
        return this.sendRequest(graphql);
    };
    BrandService.prototype.sendRequest = function (graphql) {
        var formatted_data = {
            operationName: null,
            query: graphql,
            variables: null
        };
        var body = JSON.stringify(formatted_data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url, body, { headers: headers })
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    BrandService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json());
    };
    return BrandService;
}());
BrandService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */]) === "function" && _b || Object])
], BrandService);

var _a, _b;
//# sourceMappingURL=brand.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartService = (function () {
    function CartService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.url = __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* AppSettings */].API_URL;
    }
    CartService.prototype.getCart = function (buyerId, brandId) {
        var graphql = "{\n                    buyer(buyer_id: " + buyerId + ", brand_id: " + brandId + ") {\n                      cart {\n                        id\n                        cart_items {\n                          quantity\n                          product {\n                            name\n                            image\n                            price\n                          }\n                        }\n                      }\n                    }\n                  }";
        return this.sendRequest(graphql);
    };
    CartService.prototype.sendRequest = function (graphql) {
        var formatted_data = {
            operationName: null,
            query: graphql,
            variables: null
        };
        var body = JSON.stringify(formatted_data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url, body, { headers: headers })
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    CartService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json());
    };
    return CartService;
}());
CartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */]) === "function" && _b || Object])
], CartService);

var _a, _b;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__menu_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__location_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__cart_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__brand_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationService = (function () {
    function LocationService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.url = __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* AppSettings */].MAP_URL;
    }
    LocationService.prototype.getLocation = function (lat, long) {
        this.url += lat + ',' + long;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get(this.url, { headers: headers })
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    LocationService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json());
    };
    return LocationService;
}());
LocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */]) === "function" && _b || Object])
], LocationService);

var _a, _b;
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuService = (function () {
    function MenuService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.url = __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* AppSettings */].API_URL;
    }
    MenuService.prototype.getAllCategories = function (id) {
        var graphql = "{\n                      categories(brand_id: " + id + ") {\n                        id\n                        name\n                      }\n                    }";
        return this.sendRequest(graphql);
    };
    MenuService.prototype.getProducts = function (id) {
        // with location
        var graphql = "{\n                      products(brand_id:" + this._cookieService.get('brand_id')
            + ", category_id: " + id + ", location: \"" + this._cookieService.get('location') + "\"){\n                        id\n                        name\n                        description\n                        image\n                        price\n                      }\n                    }";
        return this.sendRequest(graphql);
    };
    MenuService.prototype.getProduct = function (id) {
        var graphql = "{\n                      product(id: " + id + "brand_id:" + this._cookieService.get('brand_id') + "){\n                        id\n                        name\n                        description\n                        image\n                        price\n                        product_options {\n                          id\n                          name\n                          product_option_values {\n                            id\n                            value\n                            price\n                          }\n                        }\n                      }\n                    }";
        return this.sendRequest(graphql);
    };
    MenuService.prototype.addToCart = function (data) {
        var ids = "";
        for (var i = 0; i < data['selected_options'].length; i++) {
            if (i != data['selected_options'].length - 1)
                ids += '"' + data['selected_options'][i]['id'] + '",';
            else
                ids += '"' + data['selected_options'][i]['id'] + '"';
        }
        var mutation = " mutation {\n      addItemToCart(cart_id: " + data['cart_id'] + ",\n        product_id: " + data['product_id'] + ",\n        product_option_value_ids: [" + ids + "],\n        quantity: " + data['quantity'] + ") {\n          cart {\n            id\n          }\n      }\n    }";
        console.log(mutation);
        return this.sendRequest(mutation);
    };
    MenuService.prototype.sendRequest = function (graphql) {
        var formatted_data = {
            operationName: null,
            query: graphql,
            variables: null
        };
        var body = JSON.stringify(formatted_data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url, body, { headers: headers })
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    MenuService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json());
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */]) === "function" && _b || Object])
], MenuService);

var _a, _b;
//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.API_URL = 'https://2623d53e.ngrok.io/graphql';
AppSettings.MAP_URL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("../../../../../src/app/shared/constants.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map