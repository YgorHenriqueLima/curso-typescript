"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
;
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
    colors["red"] = "#f00";
    colors["green"] = "#0f0";
    colors["blue"] = "#00f";
})(colors || (colors = {}));
let c = colors.black;
console.log(c);
