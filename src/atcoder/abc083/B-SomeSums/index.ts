// main.ts
import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  // 1行目のスペース区切りの値を別々の変数として受け取る
  const [N, a, b] = input[0].split(" ").map(Number);

  let count = 0;
  for (let i = 0; i < N; i++) {
    // arr1[i]の各桁の和を計算
    const digits = String(i + 1)
      .split("")
      .map(Number);
    let sumOfDigits = 0;

    for (let j = 0; j < digits.length; j++) {
      sumOfDigits += digits[j];
    }
    // 条件を満たす場合のみ、元の数値（arr1[i]）をarr2に追加
    if (a <= sumOfDigits && sumOfDigits <= b) {
      count += i + 1;
    }
  }
  console.log(count);
};

main();
