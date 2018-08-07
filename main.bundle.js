webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_directives/custom-max-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomMaxDirective = /** @class */ (function () {
    function CustomMaxDirective() {
    }
    CustomMaxDirective_1 = CustomMaxDirective;
    CustomMaxDirective.prototype.validate = function (c) {
        var v = c.value;
        return (v > this.customMax) ? { "customMax": true } : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], CustomMaxDirective.prototype, "customMax", void 0);
    CustomMaxDirective = CustomMaxDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[customMax][formControlName],[customMax][formControl],[customMax][ngModel]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: CustomMaxDirective_1, multi: true }]
        })
    ], CustomMaxDirective);
    return CustomMaxDirective;
    var CustomMaxDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/custom-min-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMinDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomMinDirective = /** @class */ (function () {
    function CustomMinDirective() {
    }
    CustomMinDirective_1 = CustomMinDirective;
    CustomMinDirective.prototype.validate = function (c) {
        var v = c.value;
        return (v < this.customMin) ? { "customMin": true } : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], CustomMinDirective.prototype, "customMin", void 0);
    CustomMinDirective = CustomMinDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[customMin][formControlName],[customMin][formControl],[customMin][ngModel]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: CustomMinDirective_1, multi: true }]
        })
    ], CustomMinDirective);
    return CustomMinDirective;
    var CustomMinDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: rgb(247, 222, 222);\r\n}\r\n\r\n.form-style{\r\n    padding: 20px;\r\n    margin: 10px;\r\n}\r\n\r\n.logo-container{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.logo-container > object{\r\n    width: 100%;\r\n    height: 50%;\r\n}\r\n\r\n.center{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.navigation{\r\n    padding: 0;\r\n}\r\n\r\n.nav{\r\n    margin: 0px;\r\n    padding: 5px;\r\n    background: white;\r\n}\r\n\r\na{\r\n    color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '5px' }\"></ngx-loading>\n<div class=\"container-fluid navigation\">\n  <!-- <div class=\"row nav center\">\n    <a class=\"navbar-brand\" href=\"https://www.solwit.com\" target=\"_blank\">\n      <img src=\"https://uploads-ssl.webflow.com/58d507c961c9af590f6532e8/58d518082da455e440a552ee_logo-solwit.svg\" width=\"220\" height=\"35\" alt=\"Solwit\">\n    </a>\n    <div class=\"\">Zadanie rekrutacyjne </div>\n  </div> -->\n  <div class=\"container\">\n    <h2 class=\"col-xl-6 offset-xl-3 col-md-10 offset-md-1 col-12\">\n      Aplikacja do wyświetlania średniej temperatury danego obszaru.\n    </h2>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-6 col-md-8 col-sm-12\">\n        <form class=\"form-style\" (ngSubmit)=\"zapisz(f) && f.form.valid\" #f=\"ngForm\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"latitude\" placement=\"top\" ngbTooltip=\"Liczba od -90 od 90, gdzie minus oznacza kierunek południowy, a plus północny\">Szerokość geograficzna: \n              <sup><i class=\"fa fa-question-circle\"></i></sup>\n            </label>\n            <input type=\"number\" class=\"form-control\" autocomplete=\"off\" id=\"latitude\" placeholder=\"Podaj szerokość\" name=\"lat\" ngModel #lat=\"ngModel\" required [customMin]=\"minNumLat\" [customMax]=\"maxNumLat\">\n            <small *ngIf=\"f.submitted && lat.errors && !isValidFormSubmitted\" class=\"help-block\" style=\"color: #c20a0a\">Szerokość geograficzna powinna wynosić od {{minNumLat}} do {{ maxNumLat }}</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"longitude\" placement=\"top\" ngbTooltip=\"Liczba od -180 od 180, gdzie minus oznacza kierunek zachodni, a plus wschodni\">Długość geograficzna: \n              <sup><i class=\"fa fa-question-circle\" ></i></sup\n            ></label>\n            <input type=\"number\" class=\"form-control\" autocomplete=\"off\" id=\"longitude\" placeholder=\"Podaj długość\" name=\"lon\" ngModel #lon=\"ngModel\" required [customMin]=\"minNumLon\" [customMax]=\"maxNumLon\">\n            <small *ngIf=\"f.submitted && lon.errors && !isValidFormSubmitted\" class=\"help-block\" style=\"color: #c20a0a\">Długość geograficzna powinna wynosić od {{minNumLon}} do {{ maxNumLon }}</small>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Sprawdź</button>\n        </form>\n      </div>\n\n      <div *ngIf=\"showTemperature\" class=\"col-12 text-center\">\n        Temperatura obszaru {{data.name}} o szerokości {{data.coord.lat}} i długości {{data.coord.lon}} wynosi: {{temperature}} &#8451;\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.isValidFormSubmitted = false;
        this.minNumLat = -90;
        this.maxNumLat = 90;
        this.minNumLon = -180;
        this.maxNumLon = 180;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showTemperature = false;
        this.showAnimation = true;
        setTimeout(function () {
            _this.showAnimation = false;
        }, 5500);
        setTimeout(function () {
            _this.hide = true;
        }, 5000);
        setTimeout(function () {
            _this.showContainer = true;
        }, 5550);
    };
    AppComponent.prototype.zapisz = function (form) {
        var _this = this;
        document.body.style.backgroundColor = 'grey';
        this.isValidFormSubmitted = false;
        if (form.invalid) {
            return;
        }
        this.isValidFormSubmitted = true;
        this.loading = true;
        this.http.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=' + form.value.lat + '&lon=' + form.value.lon + '&units=metric&APPID=8ffbb88b91e17c55caec95db6d8e40de').subscribe(function (data) {
            _this.data = data;
            _this.temperature = _this.data.main.temp;
            console.log(_this.data);
            _this.loading = false;
            _this.showTemperature = true;
            form.resetForm();
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_custom_min_validator_directive__ = __webpack_require__("../../../../../src/app/_directives/custom-min-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_custom_max_validator_directive__ = __webpack_require__("../../../../../src/app/_directives/custom-max-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_0__directives_custom_min_validator_directive__["a" /* CustomMinDirective */],
                __WEBPACK_IMPORTED_MODULE_1__directives_custom_max_validator_directive__["a" /* CustomMaxDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_loading__["a" /* LoadingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map