"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)(0, "utf8").trim().split("\n");
var N = Number(input[0]);
var S = input[1].split(" ").map(Number);
var T = input[2].split(" ").map(Number);
// ans[i] = i番目の人が宝石を受け取る最短時刻
// 最初に確実にわかっている時刻は高橋くんから直接受け取る時刻 T[i]なのでansに代入する
var ans = __spreadArray([], T, true);
// 円なので2周見る
for (var i = 0; i < 2 * N; i++) {
    var now = i % N;
    var next = (now + 1) % N;
    // now が受け取った時刻 + now から next に渡す時間
    ans[next] = Math.min(ans[next], ans[now] + S[now]);
}
console.log(ans.join("\n"));
