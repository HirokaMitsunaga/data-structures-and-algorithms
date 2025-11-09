// main.ts
import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const [N] = input[0].split(" ").map(Number);
  const a = input[1].split(" ").map(Number);

  const count = a.reduce((sum, val) => {
    return sum + (val > 10 ? val - 10 : 0);
  }, 0);
};

main();
