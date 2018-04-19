webpackJsonp(["main"],{

/***/ "./package.json":
/***/ (function(module, exports) {

module.exports = {"name":"personal-app","license":"MIT","scripts":{"ng":"ng","start":"ng serve --open","build":"ng build --prod","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"repository":{"type":"git","url":"personal-app"},"author":"Pedro Gomes","private":true,"dependencies":{"@angular/animations":"^5.2.7","@angular/cdk":"^5.2.3","@angular/common":"^5.2.0","@angular/compiler":"^5.2.0","@angular/core":"^5.2.0","@angular/flex-layout":"^5.0.0-beta.13","@angular/forms":"^5.2.0","@angular/http":"^5.2.0","@angular/material":"^5.2.3","@angular/platform-browser":"^5.2.0","@angular/platform-browser-dynamic":"^5.2.0","@angular/router":"^5.2.0","@fortawesome/fontawesome-free-webfonts":"^1.0.5","core-js":"^2.4.1","ng2-scroll-to":"^1.0.7","rxjs":"^5.5.6","zone.js":"^0.8.19"},"devDependencies":{"@angular/cli":"~1.7.2","@angular/compiler-cli":"^5.2.0","@angular/language-service":"^5.2.0","@types/jasmine":"~2.8.3","@types/jasminewd2":"~2.0.2","@types/node":"~6.0.60","codelyzer":"^4.0.1","jasmine-core":"~2.8.0","jasmine-spec-reporter":"~4.2.1","karma":"~2.0.0","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"^1.2.1","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.1.2","ts-node":"~4.1.0","tslint":"~5.9.1","typescript":"~2.5.3"}}

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-workspace class=\"mat-typography mat-app-background\"></app-workspace>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workspace_workspace_module__ = __webpack_require__("./src/app/workspace/workspace.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                // Browser
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                // Workspace
                __WEBPACK_IMPORTED_MODULE_2__workspace_workspace_module__["a" /* WorkspaceModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/workspace/base/base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export State */
/* unused harmony export BaseAnimations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Model; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var State;
(function (State) {
    State["ACTIVE"] = "active";
    State["INACTIVE"] = "inactive";
})(State || (State = {}));
var BaseAnimations = /** @class */ (function () {
    function BaseAnimations() {
    }
    BaseAnimations.BASIC = [
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('fade', [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])(State.INACTIVE, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({
                opacity: 0
            })),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])(State.ACTIVE, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({
                opacity: 1
            })),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])(State.INACTIVE + " => " + State.ACTIVE, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])(State.ACTIVE + " => " + State.INACTIVE, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
        ])
    ];
    return BaseAnimations;
}());

var BindableComponent = /** @class */ (function () {
    function BindableComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Model)
    ], BindableComponent.prototype, "model", void 0);
    BindableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bindable',
            template: '<div></div>'
        })
    ], BindableComponent);
    return BindableComponent;
}());

var Model = /** @class */ (function () {
    function Model(_data) {
        this._data = _data;
    }
    Object.defineProperty(Model.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    return Model;
}());



/***/ }),

/***/ "./src/app/workspace/component.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_section_chart_chart_component__ = __webpack_require__("./src/app/workspace/page/section/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_section_formula_formula_component__ = __webpack_require__("./src/app/workspace/page/section/formula/formula.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_section_grid_grid_component__ = __webpack_require__("./src/app/workspace/page/section/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_section_history_history_component__ = __webpack_require__("./src/app/workspace/page/section/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_base__ = __webpack_require__("./src/app/workspace/base/base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_section_about_about_component__ = __webpack_require__("./src/app/workspace/page/section/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ComponentService = /** @class */ (function () {
    function ComponentService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ComponentService.prototype.createComponent = function (container, componentString, data) {
        container.clear();
        var type = this.getComponent(componentString);
        var factory = this.createComponentFactory(type);
        var component = container.createComponent(factory);
        component.instance.model = data || new __WEBPACK_IMPORTED_MODULE_5__base_base__["b" /* Model */]({});
    };
    ComponentService.prototype.getComponent = function (name) {
        var component;
        switch (name) {
            case 'about':
                component = __WEBPACK_IMPORTED_MODULE_6__page_section_about_about_component__["a" /* AboutComponent */];
                break;
            case 'chart':
                component = __WEBPACK_IMPORTED_MODULE_1__page_section_chart_chart_component__["a" /* ChartComponent */];
                break;
            case 'formula':
                component = __WEBPACK_IMPORTED_MODULE_2__page_section_formula_formula_component__["a" /* FormulaComponent */];
                break;
            case 'grid':
                component = __WEBPACK_IMPORTED_MODULE_3__page_section_grid_grid_component__["a" /* GridComponent */];
                break;
            case 'history':
                component = __WEBPACK_IMPORTED_MODULE_4__page_section_history_history_component__["a" /* HistoryComponent */];
                break;
            default:
                throw "Cannot find specific component " + name + "!";
        }
        return component;
    };
    ComponentService.prototype.createComponentFactory = function (component) {
        return this.componentFactoryResolver.resolveComponentFactory(component);
    };
    ComponentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], ComponentService);
    return ComponentService;
}());



/***/ }),

/***/ "./src/app/workspace/dom.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function _window() {
    return window;
}
function _document() {
    return document;
}
var DomService = /** @class */ (function () {
    function DomService() {
    }
    Object.defineProperty(DomService.prototype, "window", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomService.prototype, "document", {
        get: function () {
            return _document();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomService.prototype, "body", {
        get: function () {
            return _document().body;
        },
        enumerable: true,
        configurable: true
    });
    DomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DomService);
    return DomService;
}());



/***/ }),

/***/ "./src/app/workspace/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"loader-container\">\r\n    <mat-spinner diameter=\"150\" strokeWidth=\"2\"></mat-spinner>\r\n    <h4 class=\"mat-title\">Loading Resources...</h4>\r\n</div>"

/***/ }),

/***/ "./src/app/workspace/loader/loader.component.scss":
/***/ (function(module, exports) {

module.exports = ".loader-container {\n  height: 100vh; }\n"

/***/ }),

/***/ "./src/app/workspace/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/workspace/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/workspace/loader/loader.component.scss")]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/workspace/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService_1 = MessageService;
    MessageService.prototype.processMessage = function (path) {
        return this.http.get(MessageService_1.MESSAGE_PATH + "/" + path, '{responseType: "text"}');
    };
    MessageService.MESSAGE_PATH = './assets/messages';
    MessageService = MessageService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MessageService);
    return MessageService;
    var MessageService_1;
}());



/***/ }),

/***/ "./src/app/workspace/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" [class.toolbar-show]=\"showToolbar\">\r\n\t<a mat-icon-button scrollTo href=\"#home\">\r\n\t\t<mat-icon fontSet=\"fas\" fontIcon=\"fa-{{model.data['home']}}\"></mat-icon>\r\n\t</a>\r\n\t<span class=\"mat-toolbar-spacer\"></span>\r\n\t<div class=\"navbar-buttons\" fxLayout=\"row\" fxLayoutGap=\"0.6rem\">\r\n\t\t<a *ngFor=\"let button of model.data['buttons'];\" scrollTo mat-button href=\"{{button.action}}\" [class.button-highlight]=\"button['highlight']\">\r\n\t\t\t<span>{{ button.text }}</span>\r\n\t\t</a>\r\n\r\n\t\t<button mat-button [matMenuTriggerFor]=\"downloadMenu\" class=\"download-button\">\r\n\t\t\t<span>Download</span>\r\n\t\t</button>\r\n\t</div>\r\n</mat-toolbar>\r\n\r\n<mat-menu #downloadMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\" [overlapTrigger]=\"false\" class=\"mat-primary\">\r\n\t<a mat-menu-item href=\"https://drive.google.com/file/d/1b2zlIAKF-WOKOD1VRnnJQqOjA9yJt1a8/view?usp=sharing\">CV</a>\r\n\t<a mat-menu-item href=\"https://drive.google.com/file/d/1fyuLikYB3I8Szw3mxrHi0OxUCXyUJFm_/view?usp=sharing\">CV (incl. Portfolio)</a>\r\n</mat-menu>"

/***/ }),

/***/ "./src/app/workspace/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 1;\n  position: fixed;\n  width: 100%;\n  top: 0px; }\n  :host .mat-toolbar {\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n  :host .mat-toolbar.toolbar-show {\n      -webkit-filter: drop-shadow(0px 0px 4px rgba(8, 8, 8, 0.8));\n              filter: drop-shadow(0px 0px 4px rgba(8, 8, 8, 0.8)); }\n  :host .mat-button {\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n"

/***/ }),

/***/ "./src/app/workspace/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__("./src/app/workspace/base/base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__renderer_service__ = __webpack_require__("./src/app/workspace/renderer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_service__ = __webpack_require__("./src/app/workspace/dom.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function (_super) {
    __extends(NavbarComponent, _super);
    function NavbarComponent(rendererService, domService) {
        var _this = _super.call(this) || this;
        _this.rendererService = rendererService;
        _this.domService = domService;
        _this.showToolbar = false;
        _this.highlightButton = false;
        return _this;
    }
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var doc = this.domService.document;
        var docElem = doc.documentElement;
        var id, elem, threshold, fullHeight;
        // TODO Increase performance on scroll event
        this.rendererService.on('window', 'scroll', function (event) {
            _this.showToolbar = (docElem.scrollTop > docElem.clientHeight / 2);
            fullHeight = docElem.offsetHeight;
            for (var _i = 0, _a = _this.model.data['buttons']; _i < _a.length; _i++) {
                var button = _a[_i];
                threshold = (docElem.scrollTop + docElem.clientHeight / 4);
                button['highlight'] = false;
                id = button['action'];
                if (id[0] === '#') {
                    elem = doc.getElementById(id.substr(1));
                    if ((threshold >= elem.offsetTop &&
                        threshold <= elem.offsetTop + elem.clientHeight) ||
                        (docElem.scrollTop + docElem.clientHeight === fullHeight &&
                            elem.offsetTop + elem.clientHeight === fullHeight)) {
                        button['highlight'] = true;
                    }
                }
            }
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/workspace/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/workspace/navbar/navbar.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__dom_service__["a" /* DomService */], __WEBPACK_IMPORTED_MODULE_2__renderer_service__["a" /* RendererService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__renderer_service__["a" /* RendererService */], __WEBPACK_IMPORTED_MODULE_3__dom_service__["a" /* DomService */]])
    ], NavbarComponent);
    return NavbarComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BindableComponent */]));



/***/ }),

/***/ "./src/app/workspace/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\r\n\t<!-- WELCOME -->\r\n\t<header id=\"home\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\t\t<div class=\"container-text\">\r\n\t\t\t<h1 class=\"mat-display-4\">{{model.data['information']['name']}}</h1>\r\n\t\t\t<h2 class=\"mat-display-1\">{{model.data['information']['role']}}</h2>\r\n\t\t</div>\r\n\t\t<a mat-mini-fab scrollTo color=\"primary\" href=\"#{{sections[0].data['id']}}\">\r\n\t\t\t<mat-icon fontSet=\"fas\" fontIcon=\"fa-angle-double-down\"></mat-icon>\r\n\t\t</a>\r\n\t</header>\r\n\r\n\t<app-section *ngFor=\"let section of sections; index as i\" [model]=\"section.data['data']\" class=\"{{section.data['theme']}}\" [attr.id]=\"section.data['id']\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"4rem\"></app-section>\r\n\r\n\t<footer id=\"contacts\" fxLayout=\"row\">\r\n\t\t<div class=\"footer-contacts\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"1rem\">\r\n\t\t\t<div *ngFor=\"let contact of model.data['information']['contacts']['personal']\" class=\"footer-contact\" fxLayout=\"row\" fxLayoutAlign=\"strech center\" fxLayoutGap=\"1rem\">\r\n\t\t\t\t<mat-icon color=\"primary\" fontIcon=\"fa-{{contact.icon}}\"></mat-icon>\r\n\t\t\t\t<h2 class=\"mat-title\">{{contact.text}}</h2>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"footer-application\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"1rem\">\r\n\t\t\t<div class=\"application-container mat-body-2\">\r\n\t\t\t\t<h1 class=\"mat-headline\">About the application:</h1>\r\n\t\t\t\t<p>The current version of Personal App is {{version}} - this is NOT the final version! There is still a lot of features and improvements that will be implemented in a near future.</p>\r\n\t\t\t\t<p>Personal App was made with <mat-icon color=\"primary\" class=\"mat-icon-caption\" style=\"vertical-align: text-bottom;\" fontIcon=\"fa-heart\"></mat-icon> by {{author}} for YOU.</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"social-container\" fxLayout=\"row\" fxAlign=\"center\" fxLayoutGap=\"1rem\">\r\n\t\t\t\t<div *ngFor=\"let social of model.data['information']['contacts']['social']\">\r\n\t\t\t\t\t<a href=\"{{social.url}}\" mat-mini-fab color=\"primary\">\r\n\t\t\t\t\t\t<mat-icon fontSet=\"fab\" fontIcon=\"fa-{{social.name}}\"></mat-icon>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n</div>"

/***/ }),

/***/ "./src/app/workspace/page/page.component.scss":
/***/ (function(module, exports) {

module.exports = ":host header {\n  height: 100vh;\n  background: url('home.a54427c26e465f2d659c.jpg') no-repeat center fixed;\n  background-size: cover; }\n  :host header .container-text > * {\n    -webkit-filter: drop-shadow(0px 8px 4px rgba(8, 8, 8, 0.8));\n            filter: drop-shadow(0px 8px 4px rgba(8, 8, 8, 0.8)); }\n  :host footer {\n  padding: 4rem 6rem;\n  -webkit-filter: drop-shadow(0px 8px 4px rgba(8, 8, 8, 0.8));\n          filter: drop-shadow(0px 8px 4px rgba(8, 8, 8, 0.8)); }\n  :host footer > .footer-contacts, :host footer .footer-application {\n    width: 100%; }\n  :host footer .footer-contact {\n    height: 100%; }\n  :host footer .footer-contact > .mat-title {\n      margin: 0;\n      display: inline-block; }\n  :host footer .footer-contact > .mat-icon {\n      width: 5vw;\n      text-align: center; }\n  :host footer .footer-contact > .mat-icon.mat-icon {\n        height: 36px;\n        font-size: 36px;\n        line-height: 36px; }\n"

/***/ }),

/***/ "./src/app/workspace/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__("./src/app/workspace/base/base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageComponent = /** @class */ (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent() {
        var _this = _super.call(this) || this;
        _this.sections = [];
        _this.author = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].author;
        _this.version = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].version;
        return _this;
    }
    PageComponent.prototype.ngOnInit = function () {
        this.loadFooter();
        this.loadSections();
    };
    PageComponent.prototype.loadFooter = function () {
        var icon;
        for (var _i = 0, _a = this.model.data['information']['contacts']['personal']; _i < _a.length; _i++) {
            var contact = _a[_i];
            switch (contact['name']) {
                case 'localization':
                    icon = 'map-marker-alt';
                    break;
                case 'phone':
                    icon = 'mobile-alt';
                    break;
                case 'email':
                    icon = 'envelope';
                    break;
                default:
                    icon = contact['name'];
            }
            contact['icon'] = icon;
        }
    };
    PageComponent.prototype.loadSections = function () {
        var theme, data;
        for (var _i = 0, _a = this.model.data['sections']; _i < _a.length; _i++) {
            var section = _a[_i];
            theme = section['theme'];
            if (theme) {
                section['theme'] = "mat-" + theme;
            }
            data = section['data'];
            section['data'] = new __WEBPACK_IMPORTED_MODULE_1__base_base__["b" /* Model */](data);
            this.sections.push(new __WEBPACK_IMPORTED_MODULE_1__base_base__["b" /* Model */](section));
        }
    };
    PageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page',
            template: __webpack_require__("./src/app/workspace/page/page.component.html"),
            styles: [__webpack_require__("./src/app/workspace/page/page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BindableComponent */]));



/***/ }),

/***/ "./src/app/workspace/page/section/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-image\">\r\n\t<img src=\"../../../../../../assets/images/profile.jpg\"/>\r\n</div>\r\n<div class=\"profile-container mat-body-2\">\r\n\t<p *ngFor=\"let paragrah of model.data['text']\">\r\n\t\t{{paragrah}}\r\n\t</p>\r\n</div>"

/***/ }),

/***/ "./src/app/workspace/page/section/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .profile-image {\n  width: 256px;\n  height: 256px;\n  margin: 0 auto 4rem auto; }\n  :host .profile-image img {\n    width: 100%;\n    -webkit-clip-path: circle(50%);\n            clip-path: circle(50%); }\n"

/***/ }),

/***/ "./src/app/workspace/page/section/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__("./src/app/workspace/base/base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutComponent = /** @class */ (function (_super) {
    __extends(AboutComponent, _super);
    function AboutComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/workspace/page/section/about/about.component.html"),
            styles: [__webpack_require__("./src/app/workspace/page/section/about/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BindableComponent */]));



/***/ }),

/***/ "./src/app/workspace/page/section/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let bar of model.data['bars']; index as i;\" class=\"chart-bar\" [style.height.px]=\"(size/100)+(distance)\" fxLayout=\"row\" fxLayoutAlign=\"stretch center\" fxLayoutGap=\"10px\">\r\n\t<p class=\"chart-name mat-body-2\">{{bar.name}}</p>\r\n\t<svg [attr.width]=\"(size*bar.value)/100\" [attr.height]=\"size/100\">\r\n\t\t<svg:rect [attr.height]=\"size/100\" [attr.width]=\"(size*bar.value)/100\" />\r\n\t</svg>\r\n\t<h4 class=\"chart-value mat-subheading-1\">{{bar.value}}%</h4>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/workspace/page/section/chart/chart.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block; }\n  :host .chart-name, :host .chart-value {\n    margin: 0; }\n  :host .chart-name {\n    width: 20vw;\n    text-align: end; }\n"

/***/ }),

/***/ "./src/app/workspace/page/section/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__("./src/app/workspace/base/base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = /** @class */ (function (_super) {
    __extends(ChartComponent, _super);
    function ChartComponent() {
        var _this = _super.call(this) || this;
        _this.size = 1000;
        _this.distance = 25;
        return _this;
    }
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__("./src/app/workspace/page/section/chart/chart.component.html"),
            styles: [__webpack_require__("./src/app/workspace/page/section/chart/chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BindableComponent */]));



/***/ }),

/***/ "./src/app/workspace/page/section/formula/formula.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"formula-container\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"12px\">\r\n\t<ng-container *ngFor=\"let variable of model.data['variables']; index as i; last as isLast\">\r\n\t\t<div class=\"formula-variable\"> \r\n\t\t\t<mat-icon fontSet=\"fas\" fontIcon=\"fa-{{variable.icon}}\"></mat-icon>\r\n\t\t\t<div class=\"variable-description\">\r\n\t\t\t\t<h3 class=\"mat-subheading-2\">{{variable.title}}</h3>\r\n\t\t\t\t<p class=\"mat-body-1\">\r\n\t\t\t\t\t{{variable.description}}\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"!isLast\" class=\"formula-operator\" fxFlexAlign=\"center\">\r\n\t\t\t<span>\r\n\t\t\t\t{{ i < model.data['variables'].length - 2 ? '+' : '='}}\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>"

/***/ }),

/***/ "./src/app/workspace/page/section/formula/formula.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  cursor: default;\n  display: block;\n  text-align: center;\n  padding-bottom: 8rem; }\n  :host .formula-operator span {\n    font-size: 18px; }\n  :host .formula-variable {\n    width: 10vw;\n    height: 36px; }\n  :host .formula-variable > .mat-icon {\n      -webkit-transition: -webkit-transform 0.2s;\n      transition: -webkit-transform 0.2s;\n      transition: transform 0.2s;\n      transition: transform 0.2s, -webkit-transform 0.2s; }\n  :host .formula-variable > .mat-icon.mat-icon {\n        height: 36px;\n        font-size: 36px;\n        line-height: 36px; }\n  :host .formula-variable .variable-description {\n      -webkit-transition: -webkit-transform 0.2s;\n      transition: -webkit-transform 0.2s;\n      transition: transform 0.2s;\n      transition: transform 0.2s, -webkit-transform 0.2s; }\n  :host .formula-variable .variable-description > :last-child {\n        -webkit-transition: opacity 0.2s;\n        transition: opacity 0.2s;\n        opacity: 0; }\n  :host .formula-variable:hover > .mat-icon {\n      -webkit-transform: scale(2);\n              transform: scale(2); }\n  :host .formula-variable:hover .variable-description {\n      -webkit-transform: translateY(18px);\n              transform: translateY(18px); }\n  :host .formula-variable:hover .variable-description > :last-child {\n        opacity: 1; }\n"

/***/ }),

/***/ "./src/app/workspace/page/section/formula/formula.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormulaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__("./src/app/workspace/base/base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormulaComponent = /** @class */ (function (_super) {
    __extends(FormulaComponent, _super);
    function FormulaComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormulaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-formula',
            template: __webpack_require__("./src/app/workspace/page/section/formula/formula.component.html"),
            styles: [__webpack_require__("./src/app/workspace/page/section/formula/formula.component.scss")]
        })
    ], FormulaComponent);
    return FormulaComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BindableComponent */]));



/***/ }),

/***/ "./src/app/workspace/page/section/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"1:1\">\r\n\t<mat-grid-tile *ngFor=\"let project of model.data['projects']\">{{project.name}}</mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/workspace/page/section/grid/grid.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .mat-grid-list {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/workspace/page/section/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__("./src/app/workspace/base/base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GridComponent = /** @class */ (function (_super) {
    __extends(GridComponent, _super);
    function GridComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__("./src/app/workspace/page/section/grid/grid.component.html"),
            styles: [__webpack_require__("./src/app/workspace/page/section/grid/grid.component.scss")]
        })
    ], GridComponent);
    return GridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BindableComponent */]));



/***/ }),

/***/ "./src/app/workspace/page/section/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let milestone of model.data['milestones']; index as i; last as isLast; even as isEven\" class=\"history-milestone\" [style.height.px]=\"distance\">\r\n\t<svg [attr.width]=\"size\" [attr.height]=\"distance\">\r\n\t\t<svg:circle [attr.cx]=\"size/2\" [attr.cy]=\"size/2\" [attr.r]=\"size/2\" />\r\n\t\t<svg:line [attr.x1]=\"size/2\" [attr.x2]=\"size/2\" [attr.y1]=\"size\" [attr.y2]=\"distance\" [attr.stroke-width]=\"size/5\" [attr.stroke-dasharray]=\"isLast ? '6' : distance\" />\r\n\t</svg>\r\n\t<div class=\"history-details\" [class.details-even]=\"isEven\" [style.margin-left.px]=\"isEven ? -60 : (size+60)\">\r\n\t\t<span class=\"history-year mat-body-2\">{{milestone.year[0]}} - {{milestone.year[1]}}</span>\r\n\t\t<h4 class=\"history-title mat-subheading-1\">{{milestone.title}}</h4>\r\n\t\t<p class=\"history-description mat-caption\">{{milestone.description}}</p>\r\n\t</div>\r\n</div>\r\n<div class=\"history-birth\">\r\n\t<svg [attr.width]=\"size\" [attr.height]=\"size\">\r\n\t\t<svg:circle [attr.cx]=\"size/2\" [attr.cy]=\"size/2\" [attr.r]=\"size/2\" />\r\n\t</svg>\r\n\t<div class=\"history-details\">\r\n\t\t<span class=\"history-year mat-body-2\">{{model.data['birth']}}</span>\r\n\t\t<h4 class=\"history-title mat-subheading-1\">A BABY WAS BORN</h4>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/workspace/page/section/history/history.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  text-align: center; }\n  :host .history-milestone .history-details {\n    text-align: left;\n    cursor: default; }\n  :host .history-milestone .history-details > .history-description {\n      -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;\n      transition: opacity 0.2s, -webkit-transform 0.2s;\n      transition: opacity 0.2s, transform 0.2s;\n      transition: opacity 0.2s, transform 0.2s, -webkit-transform 0.2s;\n      -webkit-transform: translateY(-18px);\n              transform: translateY(-18px);\n      opacity: 0; }\n  :host .history-milestone .history-details.details-even {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      text-align: end; }\n  :host .history-milestone .history-details:hover > .history-description {\n      opacity: 1;\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n  :host .history-birth > .history-details {\n    cursor: default;\n    display: block;\n    margin: 0 auto;\n    position: relative;\n    text-align: center; }\n  :host .history-details {\n    position: absolute;\n    display: inline-block;\n    max-width: 30vw; }\n  :host .history-details > .history-year {\n      line-height: 1; }\n"

/***/ }),

/***/ "./src/app/workspace/page/section/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__("./src/app/workspace/base/base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = /** @class */ (function (_super) {
    __extends(HistoryComponent, _super);
    function HistoryComponent() {
        var _this = _super.call(this) || this;
        _this.size = 14;
        _this.distance = 200;
        return _this;
    }
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-history',
            template: __webpack_require__("./src/app/workspace/page/section/history/history.component.html"),
            styles: [__webpack_require__("./src/app/workspace/page/section/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BindableComponent */]));



/***/ }),

/***/ "./src/app/workspace/page/section/section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section-container\" fxFlexAlign=\"center\">\r\n\t<h1 class=\"mat-headline\">{{model.data['title']}}</h1>\r\n\t<hr>\r\n</div>\r\n<div class=\"section-container\">\r\n\t<ng-template #componentContainer></ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/workspace/page/section/section.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 6rem; }\n"

/***/ }),

/***/ "./src/app/workspace/page/section/section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__("./src/app/workspace/base/base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("./src/app/workspace/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_service__ = __webpack_require__("./src/app/workspace/component.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionComponent = /** @class */ (function (_super) {
    __extends(SectionComponent, _super);
    function SectionComponent(messageService, componentService) {
        var _this = _super.call(this) || this;
        _this.messageService = messageService;
        _this.componentService = componentService;
        return _this;
    }
    SectionComponent.prototype.ngOnInit = function () {
        this.loadComponent();
    };
    SectionComponent.prototype.loadComponent = function () {
        var _this = this;
        this.messageService.processMessage("sections/" + this.model.data['message'])
            .subscribe(function (message) {
            _this.componentService.createComponent(_this.componentContainer, _this.model.data['component'], new __WEBPACK_IMPORTED_MODULE_1__base_base__["b" /* Model */](message.json()));
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('componentContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], SectionComponent.prototype, "componentContainer", void 0);
    SectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-section',
            template: __webpack_require__("./src/app/workspace/page/section/section.component.html"),
            styles: [__webpack_require__("./src/app/workspace/page/section/section.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_3__component_service__["a" /* ComponentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_3__component_service__["a" /* ComponentService */]])
    ], SectionComponent);
    return SectionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BindableComponent */]));



/***/ }),

/***/ "./src/app/workspace/renderer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RendererService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RendererService = /** @class */ (function () {
    function RendererService(renderer) {
        this.renderer = renderer;
    }
    RendererService.prototype.addClass = function (element, className) {
        this.renderer.addClass(element, className);
    };
    RendererService.prototype.removeClass = function (element, className) {
        this.renderer.removeClass(element, className);
    };
    RendererService.prototype.on = function (element, event, fn) {
        this.renderer.listen(element, event, fn);
    };
    RendererService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], RendererService);
    return RendererService;
}());



/***/ }),

/***/ "./src/app/workspace/workspace.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<ng-container *ngIf=\"!loaded; then loaderTemplate; else workspaceTemplate\"></ng-container>\r\n\r\n<ng-template #workspaceTemplate>\r\n    <app-navbar [model]=\"navbar\"></app-navbar>\r\n    <app-page [model]=\"page\"></app-page>\r\n</ng-template>\r\n\r\n<ng-template #loaderTemplate>\r\n    <app-loader></app-loader>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/workspace/workspace.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/workspace/workspace.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__("./src/app/workspace/base/base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("./src/app/workspace/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkspaceComponent = /** @class */ (function () {
    function WorkspaceComponent(messageService, iconRegistry) {
        this.messageService = messageService;
        this.iconRegistry = iconRegistry;
        this.loaded = false;
        // Font-awesome icon registry
        iconRegistry.setDefaultFontSetClass('fa');
        iconRegistry.registerFontClassAlias('far');
        iconRegistry.registerFontClassAlias('fas');
        iconRegistry.registerFontClassAlias('fab');
    }
    WorkspaceComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadWorkspace();
        }, 0);
    };
    WorkspaceComponent.prototype.loadWorkspace = function () {
        var _this = this;
        this.messageService.processMessage('workspace.json')
            .subscribe(function (message) {
            var json = message.json();
            _this.navbar = new __WEBPACK_IMPORTED_MODULE_1__base_base__["b" /* Model */](json['navbar']);
            _this.page = new __WEBPACK_IMPORTED_MODULE_1__base_base__["b" /* Model */](json['page']);
            _this.footer = new __WEBPACK_IMPORTED_MODULE_1__base_base__["b" /* Model */](json['footer']);
            _this.loaded = true;
        });
    };
    WorkspaceComponent.prototype.receiveAction = function ($event) {
    };
    WorkspaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-workspace',
            template: __webpack_require__("./src/app/workspace/workspace.component.html"),
            styles: [__webpack_require__("./src/app/workspace/workspace.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatIconRegistry */]])
    ], WorkspaceComponent);
    return WorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/workspace/workspace.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_scroll_to__ = __webpack_require__("./node_modules/ng2-scroll-to/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workspace_component__ = __webpack_require__("./src/app/workspace/workspace.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_page_component__ = __webpack_require__("./src/app/workspace/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loader_loader_component__ = __webpack_require__("./src/app/workspace/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_section_section_component__ = __webpack_require__("./src/app/workspace/page/section/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_section_formula_formula_component__ = __webpack_require__("./src/app/workspace/page/section/formula/formula.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_section_grid_grid_component__ = __webpack_require__("./src/app/workspace/page/section/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_section_history_history_component__ = __webpack_require__("./src/app/workspace/page/section/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page_section_chart_chart_component__ = __webpack_require__("./src/app/workspace/page/section/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_section_about_about_component__ = __webpack_require__("./src/app/workspace/page/section/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__ = __webpack_require__("./src/app/workspace/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__base_base__ = __webpack_require__("./src/app/workspace/base/base.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var WorkspaceModule = /** @class */ (function () {
    function WorkspaceModule() {
    }
    WorkspaceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_scroll_to__["ScrollToModule"].forRoot(),
                // Material
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatProgressSpinnerModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__workspace_component__["a" /* WorkspaceComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__base_base__["a" /* BindableComponent */],
                __WEBPACK_IMPORTED_MODULE_6__workspace_component__["a" /* WorkspaceComponent */],
                __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page_page_component__["a" /* PageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__page_section_section_component__["a" /* SectionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__page_section_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__page_section_formula_formula_component__["a" /* FormulaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__page_section_grid_grid_component__["a" /* GridComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_section_history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_13__page_section_chart_chart_component__["a" /* ChartComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__page_section_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_section_history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__page_section_grid_grid_component__["a" /* GridComponent */],
                __WEBPACK_IMPORTED_MODULE_10__page_section_formula_formula_component__["a" /* FormulaComponent */],
                __WEBPACK_IMPORTED_MODULE_13__page_section_chart_chart_component__["a" /* ChartComponent */]
            ]
        })
    ], WorkspaceModule);
    return WorkspaceModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    version: __webpack_require__("./package.json").version,
    author: __webpack_require__("./package.json").author
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map