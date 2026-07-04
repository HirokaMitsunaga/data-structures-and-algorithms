"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)(0, "utf8").trim().split("\n");
var N = Number(input[0]);
var C = input[1].split(" ").map(Number);
var ans = BigInt(1);
var MOD = BigInt(1000000007);
C.sort(function (a, b) { return a - b; });
for (var i = 0; i < N; i++) {
    var choices = BigInt(C[i] - i);
    if (choices <= 0) {
        console.log(0);
        process.exit(0);
    }
    ans = (ans * choices) % MOD;
}
console.log(ans.toString());
