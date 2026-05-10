import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  // 入力の受け取り
  const [N, K] = input[0].split(" ").map(Number);

  let count = N;
  let cursor = N;
  let year = 0;

  while (count < K) {
    cursor += 1;
    count += cursor;
    year += 1;
  }
  console.log(year);
};
main();
