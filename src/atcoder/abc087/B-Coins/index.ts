// main.ts
import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  // 4行の入力値を別々の変数として受け取る
  const a = Number(input[0]);
  const b = Number(input[1]);
  const c = Number(input[2]);
  const x = Number(input[3]);
  let count = 0;
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let k = 0; k <= c; k++) {
        if (500 * i + 100 * j + 50 * k === x) {
          count++;
        }
      }
    }
  }
  console.log(count);
};

main();
