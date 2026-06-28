import { readFileSync } from "fs";

const input = readFileSync(0, "utf8").trim().split(" ");
const S = input[0];
const K = Number(input[1]);

const set = new Set<string>();
const used = Array(S.length).fill(false);

const dfs = (current: string) => {
  if (current.length === S.length) {
    set.add(current);
    return;
  }

  for (let i = 0; i < S.length; i++) {
    if (used[i]) continue;

    used[i] = true;
    dfs(current + S[i]);
    used[i] = false;
  }
};

dfs("");

const list = Array.from(set).sort();
console.log(list[K - 1]);
