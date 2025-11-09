// main.ts
import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const n = Number(input[0]);
  // 2行目以降を配列として取得
  const diameters = input.slice(1, n + 1).map(Number);
  //降順に並べ替え
  diameters.sort((a, b) => b - a);

  let count = 0; //何段なのかのカウントよう
  let num = 1000000; //値保持用、初期値で限りなく大きい値にすることのより一つ目の値が必ず入る

  //mapを使うと新しい配列を作ることになり、メモリの使用率２倍になるためforEachへ変更する
  diameters.forEach((diameter) => {
    if (num > diameter) {
      num = diameter;
      count++;
    }
  });

  console.log(count); // [10, 8, 8, 6]
};

main();
