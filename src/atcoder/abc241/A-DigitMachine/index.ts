import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  // 入力の受け取り
  const a = input[0].split(" ").map(Number);

  // 最初に画面に表示されているのは「0」
  let k = 0;

  // ボタンを押す
  k = a[k];

  // ボタンを押す
  k = a[k];

  // ボタンを押す
  k = a[k];

  // 答えを出力
  console.log(k);
};

main();

