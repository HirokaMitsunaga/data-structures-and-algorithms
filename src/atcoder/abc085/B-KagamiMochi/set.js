"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
    var n = Number(input[0]);
    // 2行目以降を配列として取得
    var diameters = input.slice(1, n + 1).map(Number);
    var uniqueDiameters = new Set(diameters);
    console.log(uniqueDiameters.size);
};
main();
