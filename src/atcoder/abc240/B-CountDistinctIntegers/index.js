"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
    // 入力の受け取り
    var a = input[0].split(" ").map(Number)[0];
    var b = input[1].split(" ").map(Number);
    var uniqueB = new Set(b);
    console.log(uniqueB.size);
};
main();
