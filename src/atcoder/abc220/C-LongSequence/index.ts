import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const n = Number(input[0]);
  const a = input[1].split(" ").map(Number);
  const x = Number(input[2]);

  // 数列Aの合計を計算
  const sum = a.reduce((acc, val) => acc + val, 0);

  // 数列Aを何回完全に繰り返せるか
  const fullCycles = Math.floor(x / sum);

  // その時点での合計と項数
  let count = fullCycles * sum;
  let k = fullCycles * n;

  // 残りを1つずつ足していく
  for (let i = 0; i < a.length; i++) {
    count += a[i];
    k++;
    if (count > x) {
      console.log(k);
      return;
    }
  }
};
main();
