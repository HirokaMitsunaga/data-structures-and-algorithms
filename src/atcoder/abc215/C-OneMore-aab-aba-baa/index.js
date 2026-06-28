"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)(0, "utf8").trim().split(" ");
var S = input[0];
var K = Number(input[1]);
var set = new Set();
var used = Array(S.length).fill(false);
var dfs = function (current) {
    if (current.length === S.length) {
        set.add(current);
        return;
    }
    for (var i = 0; i < S.length; i++) {
        if (used[i])
            continue;
        used[i] = true;
        dfs(current + S[i]);
        used[i] = false;
    }
};
dfs("");
var list = Array.from(set).sort();
console.log(list[K - 1]);
