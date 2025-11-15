"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
    var a = input[0].split(" ").map(Number)[0];
    var b = input[1].split(" ").map(Number);
    var c = input[2].split(" ").map(Number)[0];
    var count = 0;
    var k = 0;
    while (true) {
        for (var i = 0; i < a; i++) {
            count += b[i];
            k++;
            if (count > c) {
                console.log(k);
                return; //breakだとfor文を抜けただけになる
            }
        }
    }
};
main();
