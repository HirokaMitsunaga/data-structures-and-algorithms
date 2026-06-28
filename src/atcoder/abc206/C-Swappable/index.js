"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)(0, "utf8").trim().split("\n");
var main = function () {
    var _a;
    var N = Number(input[0]);
    var A = input[1].split(" ").map(Number);
    var count = new Map();
    for (var _i = 0, A_1 = A; _i < A_1.length; _i++) {
        var a = A_1[_i];
        count.set(a, ((_a = count.get(a)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    var ans = (BigInt(N) * BigInt(N - 1)) / BigInt(2);
    count.forEach(function (v) {
        ans -= (BigInt(v) * BigInt(v - 1)) / BigInt(2);
    });
    console.log(ans.toString());
};
main();
