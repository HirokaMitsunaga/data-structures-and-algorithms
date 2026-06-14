"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
  var A = input[1].split(" ").map(BigInt);
  var X = BigInt(input[2]);
  var kou = BigInt(0);
  var aSum = BigInt(0);
  for (var _i = 0, A_1 = A; _i < A_1.length; _i++) {
    var value = A_1[_i];
    kou++;
    if (X < aSum) {
      console.log(kou.toString());
      return;
    }
    aSum += value;
  }
  var shou = X / aSum;
  var count = shou * aSum;
  kou = shou * BigInt(A.length);
  for (var index = 0; index < A.length; index++) {
    count += A[index];
    kou++;
    if (X < count) {
      console.log(kou.toString());
      return;
    }
  }
};
main();
