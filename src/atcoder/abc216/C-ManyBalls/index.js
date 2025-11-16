"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
  // 入力の受け取り
  var N = BigInt(input[0]);
  // 答え(最初は空)
  var ans = "";
  // Nが0より大きい間
  while (BigInt(0) < N) {
    // Nが偶数なら
    if (N % BigInt(2) === BigInt(0)) {
      // ansの左端にBを追加
      ans = "B" + ans;
      // 2で割る
      N = N / BigInt(2);
    } else {
      // それ以外(Nが奇数なら)
      // ansの左端にAを追加
      ans = "A" + ans;
      // 1を引く
      N -= BigInt(1);
    }
  }
  // 答えを出力
  console.log(ans);
};
main();
