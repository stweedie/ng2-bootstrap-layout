"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bootstrap_layout_1 = require('bootstrap-layout');
var scrollable_directive_1 = require('../directives/scrollable.directive');
var SidebarComponent = (function () {
    function SidebarComponent(elementRef, sidebar) {
        this.elementRef = elementRef;
        this.sidebar = sidebar;
        this.sidebarClass = 'sidebar-dark bg-primary';
        this.position = 'left';
        this.isActive = true;
    }
    Object.defineProperty(SidebarComponent.prototype, "selector", {
        get: function () {
            return this.elementRef.nativeElement.querySelector('.sidebar');
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sidebar.init(this.selector);
        if (this.onToggle)
            this.onToggle.subscribe(function (show) { return _this.toggle(show); });
        if (!this.isActive)
            this.sidebar.hide(this.selector);
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.sidebar.destroy(this.selector);
        if (this.onToggle)
            this.onToggle.unsubscribe();
    };
    SidebarComponent.prototype.toggle = function (show) {
        show ? this.sidebar.show(this.selector) : this.sidebar.hide(this.selector);
    };
    __decorate([
        core_1.Input('sidebar-id'), 
        __metadata('design:type', String)
    ], SidebarComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input('sidebar-class'), 
        __metadata('design:type', String)
    ], SidebarComponent.prototype, "sidebarClass", void 0);
    __decorate([
        core_1.Input('sidebar-position'), 
        __metadata('design:type', String)
    ], SidebarComponent.prototype, "position", void 0);
    __decorate([
        core_1.Input('onToggle'), 
        __metadata('design:type', core_1.EventEmitter)
    ], SidebarComponent.prototype, "onToggle", void 0);
    __decorate([
        core_1.Input('isActive'), 
        __metadata('design:type', Boolean)
    ], SidebarComponent.prototype, "isActive", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'ng2-bl-sidebar',
            template: "\n\t\t<div class=\"sidebar\" [id]=\"id\" \n\t\t\t[ngClass]=\"sidebarClass\" \n\t\t\t[attr.data-position]=\"position\"\n\t\t\tng2-bl-scrollable>\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t",
            directives: [
                scrollable_directive_1.ScrollableDirective
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, bootstrap_layout_1.Sidebar])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
