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
var ComponentThatUSESMODAL = (function () {
    function ComponentThatUSESMODAL() {
        this.modal = {
            "header": "MODAL HEADER",
            "text": "MODAL TEXT"
        };
    }
    return ComponentThatUSESMODAL;
}());
ComponentThatUSESMODAL = __decorate([
    core_1.Component({
        template: "\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n        </div>\n        <div class=\"modal-body\">\n          ...\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n        </div>\n      </div>\n    </div>\n  </div>"
    }),
    __metadata("design:paramtypes", [])
], ComponentThatUSESMODAL);
exports.ComponentThatUSESMODAL = ComponentThatUSESMODAL;
//# sourceMappingURL=modal.component.js.map