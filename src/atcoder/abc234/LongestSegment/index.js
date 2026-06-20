"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim().split("\n");
var main = function () {
    var values = input.slice(1).map(function (value) {
        var _a = value.split(" ").map(Number), x = _a[0], y = _a[1];
        return [x, y];
    });
    var max = 0;
    for (var i = 0; i < values.length; i++) {
        for (var j = i + 1; j < values.length; j++) {
            var currentValue = 0;
            currentValue = Math.sqrt(Math.pow((values[i][0] - values[j][0]), 2) + Math.pow((values[i][1] - values[j][1]), 2));
            if (max <= currentValue) {
                max = currentValue;
            }
        }
    }
    console.log(max);
};
main();
