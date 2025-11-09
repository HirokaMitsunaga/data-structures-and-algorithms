// main.ts
import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const n = Number(input[0]);
  // 2行目以降を配列として取得
  const diameters = input.slice(1, n + 1).map(Number);
  const uniqueDiameters = new Set(diameters);

  console.log(uniqueDiameters.size);
};

main();
