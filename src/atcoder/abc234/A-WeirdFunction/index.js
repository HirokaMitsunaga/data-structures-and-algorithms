"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
    var x = input[0].split(" ").map(Number)[0];
    console.log(calc(calc(calc(x) + x) + calc(calc(x))));
};
function calc(x) {
    return x * x + 2 * x + 3;
}
main();
