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
var FooterComponent = (function () {
    function FooterComponent() {
        this.socialAssets = {
            "droidconGlobal": {
                "href": "",
                "imgSrc": require("../../assets/images/DroidCon_Logo.png"),
                "alt": "droidcon global logo"
            },
            "facebook": {
                "href": "https://www.facebook.com/droidconpl",
                "imgSrc": require("../../assets/images/facebook.svg"),
                "alt": "facebook logo"
            },
            "twitter": {
                "href": "https://twitter.com/droidconkr",
                "imgSrc": require("../../assets/images/twitter.svg"),
                "alt": "twitter logo"
            },
            "github": {
                "href": "https://github.com/droidconpl",
                "imgSrc": require("../../assets/images/github.svg"),
                "alt": "github logo"
            },
            "googlePlus": {
                "href": "https://plus.google.com/u/3/+droidconKrak%C3%B3wPL",
                "imgSrc": require("../../assets/images/google+.svg"),
                "alt": "Google Plus logo"
            },
            "youTube": {
                "href": "https://www.youtube.com/watch?v=Dg-dbrP9PaM&list=PLvpKlOXx1MBMfL4llJOi0VX6LcQVP0Su0",
                "imgSrc": require("../../assets/images/youtube.svg"),
                "alt": "YouTube logo"
            }
        };
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'app-footer',
        template: require('./footer.component.pug'),
        styles: [require('./footer.component.styl').toString()]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map