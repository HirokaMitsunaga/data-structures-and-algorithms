// main.ts
import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const [a] = input[0].split(" ").map(Number);
  const b = input[1].split(" ").map(Number);

  //大きい順に並び替え
  b.sort((a, b) => b - a);
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < a; i++) {
    if (i % 2 === 0) {
      alice += b[i];
    } else {
      bob += b[i];
    }
  }
  console.log(alice - bob);
};

main();
