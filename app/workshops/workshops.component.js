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
var sessions_service_1 = require("../sessions/sessions.service");
var speakers_service_1 = require("../speakers/speakers.service");
var WorkshopsComponent = (function () {
    function WorkshopsComponent(sessionsService, speakersService) {
        this.IGlogo = require('../../assets/images/sponsors/IG-logo_400x400.png');
        this.workshops = [];
        this.speakers = [];
        this.modal = [];
        this.workshops = sessionsService.getByType('Workshop');
        this.speakers = speakersService.getSpeakers();
    }
    WorkshopsComponent.prototype.speakerImg = function (img) {
        return require('../../assets/photos/speakers/' + img);
    };
    WorkshopsComponent.prototype.setSpeaker = function (speaker) {
        this.modal = speaker;
    };
    return WorkshopsComponent;
}());
WorkshopsComponent = __decorate([
    core_1.Component({
        selector: 'workshops-page',
        template: require('./workshops.component.pug'),
        styles: [require('./workshops.component.styl').toString()]
    }),
    __metadata("design:paramtypes", [sessions_service_1.SessionsService, speakers_service_1.SpeakersService])
], WorkshopsComponent);
exports.WorkshopsComponent = WorkshopsComponent;
//# sourceMappingURL=workshops.component.js.map