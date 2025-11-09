"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
  var P = input[0].split(" ").map(Number);
  var aCode = "a".charCodeAt(0); //aの文字コードを取得(97)
  var result = P.map(function (p) {
    return String.fromCharCode(aCode + p - 1);
  }).join(""); //join入れないと配列が出力される
  console.log(result);
};
main();
