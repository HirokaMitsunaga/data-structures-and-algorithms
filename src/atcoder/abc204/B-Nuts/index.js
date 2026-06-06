"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
    var A = input[1].split(" ").map(Number);
    var count = 0;
    A.forEach(function (a) {
        if (a > 10) {
            count += a - 10;
        }
    });
    console.log(count);
};
main();
