"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./app/app.module");
var $ = require('jquery');
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
$(document).ready(function () {
    //timer function
    $(function () {
        var d = new Date("December 8, 2016 08:00:00");
        $('.clock-builder-output').countdown(d, function (event) {
            $("#days").html(event.strftime('%D'));
            $("#hours").html(event.strftime('%H'));
            $("#minutes").html(event.strftime('%M'));
            $("#seconds").html(event.strftime('%S'));
        });
    });
    $("body").on('click', 'a.scrollable', function (e) {
        // target element id
        var id = window.location.hash;
        if (id.indexOf("#/") >= 0) {
            id = id.slice(2);
        }
        ;
        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        // wyłączenie normalnej hashowej nawigacji
        // e.preventDefault();
        // top relatywnie do dokumentu
        var pos = $(id).offset().top - 100;
        // animacja
        $('body, html').animate({ scrollTop: pos });
    });
});
//# sourceMappingURL=main.js.map