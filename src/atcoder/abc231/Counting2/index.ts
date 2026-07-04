import { readFileSync } from "fs";

const input = readFileSync(0, "utf8").trim().split("\n");

const [N, Q] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

const X: number[] = [];
for (let i = 2; i < Q + 2; i++) {
  X.push(Number(input[i]));
}

// 数値として昇順ソート
A.sort((a, b) => a - b);

// x以上が初めて出てくるindexを返す
const nibun = (x: number): number => {
  let l = 0;
  let r = N - 1;

  while (r - l > 1) {
    const c = Math.floor((l + r) / 2);

    if (A[c] < x) {
      l = c;
    } else {
      r = c;
    }
  }

  return r;
};

const ans: string[] = [];

for (const x of X) {
  // xが最小値以下なら、全員が条件を満たす
  if (x <= A[0]) {
    ans.push(String(N));
    // xが最大値より大きいなら、条件を満たす人はいない
  } else if (A[N - 1] < x) {
    ans.push("0");
  } else {
    // x以上の人が初めて現れる添字を二分探索で求める
    const index = nibun(x);
    // index以降の要素はすべてx以上なので、その人数を求める
    ans.push(String(N - index));
  }
}

console.log(ans.join("\n"));
