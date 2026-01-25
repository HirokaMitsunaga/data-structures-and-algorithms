"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
    var _a = input[0].split(" ").map(Number), a = _a[0], b = _a[1];
    console.log((a / 100) * b);
};
main();
