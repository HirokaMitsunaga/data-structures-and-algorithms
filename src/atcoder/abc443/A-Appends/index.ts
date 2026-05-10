import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  // 入力の受け取り
  let N = input[0];
  console.log(N + "s");
};
main();
