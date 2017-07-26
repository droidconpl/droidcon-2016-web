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
var agenda_service_1 = require("./agenda.service");
var speakers_service_1 = require("../speakers/speakers.service");
var sessions_service_1 = require("../sessions/sessions.service");
var $ = require('jquery');
var _ = require('lodash');
var AgendaComponent = (function () {
    function AgendaComponent(agendaService, speakersService, sessionsService) {
        this.speakers = [];
        this.sessions = [];
        this.agenda = agendaService.getAgenda();
        this.agendaThursday = _.filter(this.agenda, ['dayId', 1]);
        this.agendaFriday = _.filter(this.agenda, ['dayId', 2]);
        this.agendaSaturday = _.filter(this.agenda, ['dayId', 3]);
        this.speakers = speakersService.getSpeakers();
        this.sessions = sessionsService.getSessions();
    }
    AgendaComponent.prototype.slotImg = function (img) {
        if (img) {
            return require('../../assets/images/' + img);
        }
        else {
            return null;
        }
    };
    AgendaComponent.prototype.getSpeaker = function (speakerId) {
        if (speakerId) {
            return this.speakers[speakerId - 1];
        }
        else {
            return null;
        }
    };
    AgendaComponent.prototype.getSpeakerImg = function (speakerImg) {
        if (speakerImg) {
            return require('../../assets/photos/speakers/' + speakerImg);
        }
        else {
            return null;
        }
    };
    AgendaComponent.prototype.getSession = function (sessionId) {
        if (sessionId) {
            return this.sessions[sessionId - 1];
        }
        else {
            return null;
        }
    };
    return AgendaComponent;
}());
AgendaComponent = __decorate([
    core_1.Component({
        selector: 'agenda',
        template: require('./agenda.component.pug'),
        styles: [require('./agenda.component.styl').toString()]
    }),
    __metadata("design:paramtypes", [agenda_service_1.AgendaService, speakers_service_1.SpeakersService, sessions_service_1.SessionsService])
], AgendaComponent);
exports.AgendaComponent = AgendaComponent;
var Tabs = (function () {
    function Tabs() {
        this.tabs = [];
    }
    Tabs.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    Tabs.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
        tab.active = true;
    };
    return Tabs;
}());
Tabs = __decorate([
    core_1.Component({
        selector: 'tabs',
        template: "\n    <ul id=\"agenda-list\">\n      <li class=\"agenda-item\" [class.active]=\"tab.active\" *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\">\n        {{ tab.tabTitle }}\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  ",
    }),
    __metadata("design:paramtypes", [])
], Tabs);
exports.Tabs = Tabs;
var Tab = (function () {
    function Tab(tabs) {
        tabs.addTab(this);
    }
    return Tab;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Tab.prototype, "tabTitle", void 0);
Tab = __decorate([
    core_1.Component({
        selector: 'tab',
        template: "\n    <div [hidden]=\"!active\">\n      <ng-content></ng-content>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [Tabs])
], Tab);
exports.Tab = Tab;
var AgendaTable = (function () {
    function AgendaTable(agendaService) {
        this.agenda = agendaService.getAgenda();
    }
    AgendaTable.prototype.setContent = function (data) {
        if (data == '1') {
            return require('./agenda-day.component.pug');
        }
        if (data == '2') {
            return require('./agenda-day.component.pug');
        }
    };
    return AgendaTable;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AgendaTable.prototype, "tableData", void 0);
AgendaTable = __decorate([
    core_1.Component({
        selector: 'agendaTable',
        template: "\n  <div [innerHTML]=\"setContent(this.tableData)\">\n  </div>"
    }),
    __metadata("design:paramtypes", [agenda_service_1.AgendaService])
], AgendaTable);
exports.AgendaTable = AgendaTable;
//# sourceMappingURL=agenda.component.js.map