"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// 入力の受け取り
var input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
// N の取得
var N = parseInt(input[0]);
// 座標の格納用
var x = [];
var y = [];
// i=0~(N-1)
for (var i = 0; i < N; i++) {
    // 入力の受け取り
    var _a = input[i + 1].split(" ").map(Number), xi = _a[0], yi = _a[1];
    // 座標の格納
    x.push(xi);
    y.push(yi);
}
// 答え
var ans = 0;
// i=0~(N-1)
for (var i = 0; i < N; i++) {
    // j=(i+1)~(N-1)
    for (var j = i + 1; j < N; j++) {
        // 距離の計算
        var length_1 = Math.sqrt(Math.pow((x[i] - x[j]), 2) + Math.pow((y[i] - y[j]), 2));
        // そこまでの値より大きければ更新
        ans = Math.max(ans, length_1);
    }
}
// 答えの出力
console.log(ans);
