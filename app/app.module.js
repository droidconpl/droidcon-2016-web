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
var platform_browser_1 = require("@angular/platform-browser");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_inline_svg_1 = require("ng2-inline-svg");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var footer_component_1 = require("./footer/footer.component");
var speakers_component_1 = require("./speakers/speakers.component");
var speakers_service_1 = require("./speakers/speakers.service");
var navbar_component_1 = require("./navbar/navbar.component");
var partners_component_1 = require("./partners/partners.component");
var partners_service_1 = require("./partners/partners.service");
var codeOfConduct_component_1 = require("./otherViews/codeOfConduct.component");
var sessions_component_1 = require("./sessions/sessions.component");
var sessions_service_1 = require("./sessions/sessions.service");
var speakerModal_component_1 = require("./otherViews/speakerModal.component");
var sponsors_component_1 = require("./sponsors/sponsors.component");
var sponsors_service_1 = require("./sponsors/sponsors.service");
var workshops_component_1 = require("./workshops/workshops.component");
var agenda_component_1 = require("./agenda/agenda.component");
var agenda_service_1 = require("./agenda/agenda.service");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            ng2_inline_svg_1.InlineSVGModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            footer_component_1.FooterComponent,
            speakers_component_1.SpeakersComponent,
            navbar_component_1.NavbarComponent,
            partners_component_1.PartnersComponent,
            codeOfConduct_component_1.CodeOfConductComponent,
            sessions_component_1.SessionsComponent,
            speakerModal_component_1.SpeakerModalComponent,
            sponsors_component_1.SponsorsComponent,
            workshops_component_1.WorkshopsComponent,
            agenda_component_1.AgendaComponent, agenda_component_1.Tabs, agenda_component_1.Tab, agenda_component_1.AgendaTable
        ],
        providers: [speakers_service_1.SpeakersService, partners_service_1.PartnersService, sessions_service_1.SessionsService, sponsors_service_1.SponsorsService, agenda_service_1.AgendaService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map