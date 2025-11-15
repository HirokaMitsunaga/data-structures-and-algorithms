"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
    var _a = input[0].split(" ").map(Number), a = _a[0], b = _a[1], c = _a[2];
    var A, B;
    if (c % 2 === 0) {
        // Cが偶数の場合：絶対値で比較
        A = Math.abs(a);
        B = Math.abs(b);
    }
    else {
        // Cが奇数の場合：そのまま比較
        A = a;
        B = b;
    }
    if (A > B) {
        console.log(">");
    }
    else if (A < B) {
        console.log("<");
    }
    else {
        console.log("=");
    }
};
main();
