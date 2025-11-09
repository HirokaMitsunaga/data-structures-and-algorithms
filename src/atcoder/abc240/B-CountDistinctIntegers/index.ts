import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  // 入力の受け取り
  const [a] = input[0].split(" ").map(Number);
  const b = input[1].split(" ").map(Number);

  const uniqueB = new Set(b);
  console.log(uniqueB.size);
};

main();
