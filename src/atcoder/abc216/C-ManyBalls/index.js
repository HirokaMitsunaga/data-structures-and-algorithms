"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
  var N = BigInt(input[0]);
  var ans = [];
  while (N > BigInt(0)) {
    if (N % BigInt(2) === BigInt(0)) {
      N = N / BigInt(2);
      ans.push("B");
    } else {
      N -= BigInt(1);
      ans.push("A");
    }
  }
  ans.reverse();
  console.log(ans.join(""));
};
main();
