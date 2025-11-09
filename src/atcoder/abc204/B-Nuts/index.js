"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
    var N = input[0].split(" ").map(Number)[0];
    var a = input[1].split(" ").map(Number);
    var count = 0;
    a.forEach(function (val) {
        if (val > 10) {
            count += val - 10;
        }
    });
    console.log(count);
};
main();
