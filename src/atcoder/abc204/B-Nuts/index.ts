import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const A = input[1].split(" ").map(Number);
  let count = 0;
  A.forEach((a) => {
    if (a > 10) {
      count += a - 10;
    }
  });
  console.log(count);
};

main();
