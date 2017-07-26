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
var core_1 = require("@angular/core");
var sponsors_service_1 = require("./sponsors.service");
var _ = require('lodash');
var SponsorsComponent = (function () {
    function SponsorsComponent(sponsorsService) {
        this.bronzeSponsors = [];
        this.travelPartners = [];
        this.productPartners = [];
        this.bronzeSponsors = sponsorsService.getByCategory('Bronze Sponsor');
        this.productPartners = sponsorsService.getByCategory('Product');
        this.travelPartners = sponsorsService.getByCategory('Travel');
    }
    SponsorsComponent.prototype.sponsorLogo = function (logo) {
        return require('../../assets/images/sponsors/' + logo);
    };
    return SponsorsComponent;
}());
SponsorsComponent = __decorate([
    core_1.Component({
        selector: 'sponsors',
        template: require('./sponsors.component.pug'),
        styles: [require('./sponsors.component.styl').toString()]
    }),
    __metadata("design:paramtypes", [sponsors_service_1.SponsorsService])
], SponsorsComponent);
exports.SponsorsComponent = SponsorsComponent;
//# sourceMappingURL=sponsors.component.js.map