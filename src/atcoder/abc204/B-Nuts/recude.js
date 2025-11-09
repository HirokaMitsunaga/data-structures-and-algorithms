"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
    var N = Number(input[0]);
    var a = input[1].split(" ").map(Number);
    var count = a.reduce(function (sum, val) {
        return sum + (val > 10 ? val - 10 : 0);
    }, 0);
    console.log(count);
};
main();
