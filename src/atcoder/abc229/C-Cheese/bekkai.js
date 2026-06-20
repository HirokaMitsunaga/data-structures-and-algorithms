"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
  var _a = input[0].split(" ").map(Number),
    N = _a[0],
    W = _a[1];
  var cheeses = input.slice(1).map(function (value) {
    var _a = value.split(" ").map(Number),
      delicious = _a[0],
      weight = _a[1];
    return { delicious: delicious, weight: weight };
  });
  cheeses.sort(function (a, b) {
    return b.delicious - a.delicious;
  });
  var totalWeight = 0;
  var totalDelicious = BigInt(0);
  for (var _i = 0, cheeses_1 = cheeses; _i < cheeses_1.length; _i++) {
    var cheese = cheeses_1[_i];
    if (totalWeight + cheese.weight <= W) {
      totalDelicious += BigInt(cheese.weight) * BigInt(cheese.delicious);
      totalWeight += cheese.weight;
    } else {
      totalDelicious += BigInt(W - totalWeight) * BigInt(cheese.delicious);
      break;
    }
  }
  console.log(totalDelicious.toString());
};
main();
