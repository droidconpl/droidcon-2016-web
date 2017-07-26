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
var speakers_service_1 = require("../speakers/speakers.service");
var HomeComponent = (function () {
    function HomeComponent(speakersService) {
        this.mainBackgroundImg = require('../../assets/images/droidconKraków2016.png');
        this.calendarIcon = require('../../assets/images/calendar.png');
        this.pinIcon = require('../../assets/images/location.png');
        this.learnIcon = require('../../assets/images/learn_button.png');
        this.teachIcon = require('../../assets/images/teach_button.png');
        this.supportIcon = require('../../assets/images/support_button.png');
        this.speakerPreview = [];
        this.speakerPreview = speakersService.getSpeakersPreview();
    }
    HomeComponent.prototype.speakerPreviewImg = function (img) {
        return require('../../assets/photos/speakers/' + img);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-page',
        template: require('./home.component.pug'),
        styles: [require('./home.component.styl').toString(), require('../speakers/speakers.component.styl').toString()]
    }),
    __metadata("design:paramtypes", [speakers_service_1.SpeakersService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map