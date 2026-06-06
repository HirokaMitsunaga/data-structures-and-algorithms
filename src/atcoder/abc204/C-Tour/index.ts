import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;

// 入力
const N = input[idx++];
const M = input[idx++];

// 道路情報（隣接リスト）
const connect: number[][] = Array.from({ length: N + 1 }, () => []);

// M本の道路を受け取る
for (let i = 0; i < M; i++) {
  const A = input[idx++];
  const B = input[idx++];

  // A -> B に行ける
  connect[A].push(B);
}

// BFS
// startから行ける都市数を返す
function BFS(start: number): number {
  // 行ける都市数
  let count = 1;

  // 訪問済み管理
  const visited: boolean[] = Array(N + 1).fill(false);

  // スタート地点を訪問済みに
  visited[start] = true;

  // キュー
  const que: number[] = [];

  // スタート地点を追加
  que.push(start);

  // キューが空になるまで
  while (que.length > 0) {
    // 先頭を取り出す
    const now = que.shift()!;

    // now から行ける都市を確認
    for (const to of connect[now]) {
      // 未訪問なら
      if (!visited[to]) {
        count++;

        visited[to] = true;

        que.push(to);
      }
    }
  }

  return count;
}

// 答え
let ans = 0;

// 各都市をスタート地点にして BFS
for (let x = 1; x <= N; x++) {
  ans += BFS(x);
}

// 出力
console.log(ans);
