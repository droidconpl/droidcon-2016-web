"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var speakers_component_1 = require("./speakers/speakers.component");
var sessions_component_1 = require("./sessions/sessions.component");
var codeOfConduct_component_1 = require("./otherViews/codeOfConduct.component");
var workshops_component_1 = require("./workshops/workshops.component");
var agenda_component_1 = require("./agenda/agenda.component");
var appRoutes = [
    { path: 'agenda', component: agenda_component_1.AgendaComponent },
    { path: 'workshops', component: workshops_component_1.WorkshopsComponent },
    { path: 'codeOfConduct', component: codeOfConduct_component_1.CodeOfConductComponent },
    { path: 'sessions', component: sessions_component_1.SessionsComponent },
    { path: 'speakers', component: speakers_component_1.SpeakersComponent },
    { path: '', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map