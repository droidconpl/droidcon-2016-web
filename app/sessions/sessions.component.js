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
var sessions_service_1 = require("./sessions.service");
var speakers_service_1 = require("../speakers/speakers.service");
var SessionsComponent = (function () {
    function SessionsComponent(sessionsService, speakersService) {
        this.sessions = [];
        this.speakers = [];
        this.modal = [];
        this.sessions = sessionsService.getByType('Talk');
        this.speakers = speakersService.getSpeakers();
    }
    SessionsComponent.prototype.speakerImg = function (img) {
        return require('../../assets/photos/speakers/' + img);
    };
    SessionsComponent.prototype.setSpeaker = function (speaker) {
        this.modal = speaker;
    };
    return SessionsComponent;
}());
SessionsComponent = __decorate([
    core_1.Component({
        selector: 'sessions',
        template: require('./sessions.component.pug'),
        styles: [require('./sessions.component.styl').toString()]
    }),
    __metadata("design:paramtypes", [sessions_service_1.SessionsService, speakers_service_1.SpeakersService])
], SessionsComponent);
exports.SessionsComponent = SessionsComponent;
//# sourceMappingURL=sessions.component.js.map