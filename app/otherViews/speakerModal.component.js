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
var SpeakerModalComponent = (function () {
    function SpeakerModalComponent() {
        this.modal = [];
        this.imgSrc = '../../assets/photos/speakers/';
        this.websiteIcon = require('../../assets/images/website.svg');
        this.facebookIcon = require('../../assets/images/facebook.svg');
        this.twitterIcon = require('../../assets/images/twitter.svg');
        this.githubIcon = require('../../assets/images/github.svg');
        this.linkedInIcon = require('../../assets/images/linkedin.svg');
        this.googlePlusIcon = require('../../assets/images/google+.svg');
    }
    return SpeakerModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SpeakerModalComponent.prototype, "modal", void 0);
SpeakerModalComponent = __decorate([
    core_1.Component({
        selector: 'speaker-modal',
        template: require('./speakerModal.component.pug'),
        styles: [require('./speakerModal.component.styl').toString()]
    }),
    __metadata("design:paramtypes", [])
], SpeakerModalComponent);
exports.SpeakerModalComponent = SpeakerModalComponent;
$('.modal').on('hidden.bs.modal', function (e) {
    console.log("On hidden ... ");
});
//# sourceMappingURL=speakerModal.component.js.map