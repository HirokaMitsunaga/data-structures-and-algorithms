import { readFileSync } from "fs";

const input = readFileSync(0, "utf8").trim().split("\n");
const N = Number(input[0]);
const S = input[1].split(" ").map(Number);
const T = input[2].split(" ").map(Number);

// ans[i] = i番目の人が宝石を受け取る最短時刻
// 最初に確実にわかっている時刻は高橋くんから直接受け取る時刻 T[i]なのでansに代入する
const ans = [...T];

// 円なので2周見る
for (let i = 0; i < 2 * N; i++) {
  const now = i % N;
  const next = (now + 1) % N;

  // now が受け取った時刻 + now から next に渡す時間
  ans[next] = Math.min(ans[next], ans[now] + S[now]);
}

console.log(ans.join("\n"));
