import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  // 入力の受け取り
  const [x1, y1] = input[0].split(" ").map(Number);
  const [x2, y2] = input[1].split(" ").map(Number);
  const [x3, y3] = input[2].split(" ").map(Number);

  let x4: number;
  let y4: number;

  // x1=x2の場合
  if (x1 === x2) {
    x4 = x3;
  }
  // x2=x3の場合
  else if (x2 === x3) {
    x4 = x1;
  }
  // x3=x1の場合
  else if (x3 === x1) {
    x4 = x2;
  } else {
    x4 = x1; // このケースは制約上発生しないが、TypeScriptの型チェックのために必要
  }

  // y1=y2の場合
  if (y1 === y2) {
    y4 = y3;
  }
  // y2=y3の場合
  else if (y2 === y3) {
    y4 = y1;
  }
  // y3=y1の場合
  else if (y3 === y1) {
    y4 = y2;
  } else {
    y4 = y1; // このケースは制約上発生しないが、TypeScriptの型チェックのために必要
  }

  // 答えの出力
  console.log(x4, y4);
};

main();
