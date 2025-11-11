import * as fs from "fs";

const main = () => {
  // N の取得
  const input = fs.readFileSync(0, "utf8").trim().split("\n");
  const N = Number(input[0]);

  // 座標の格納用
  const x: number[] = [];
  const y: number[] = [];

  // i=0~(N-1)
  for (let i = 0; i < N; i++) {
    // 入力の受け取り
    const [xi, yi] = input[i + 1].split(" ").map(Number);

    // 座標の格納
    x.push(xi);
    y.push(yi);
  }

  // 答え
  let ans = 0;

  // i=0~(N-1)
  for (let i = 0; i < N; i++) {
    // j=(i+1)~(N-1)
    for (let j = i + 1; j < N; j++) {
      // 距離の計算
      const length = Math.sqrt((x[i] - x[j]) ** 2 + (y[i] - y[j]) ** 2);

      // そこまでの値より大きければ更新
      ans = Math.max(ans, length);
    }
  }

  // 答えの出力
  console.log(ans);
};

main();
