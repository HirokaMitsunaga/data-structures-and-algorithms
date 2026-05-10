"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
    // 入力の受け取り
    var _a = input[0].split(" ").map(Number), N = _a[0], K = _a[1];
    var count = N;
    var cursor = N;
    var year = 0;
    while (count < K) {
        cursor += 1;
        count += cursor;
        year += 1;
    }
    console.log(year);
};
main();
