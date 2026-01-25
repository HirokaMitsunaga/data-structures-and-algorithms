import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const [x] = input[0].split(" ").map(Number);

  console.log(calc(calc(calc(x) + x) + calc(calc(x))));
};

function calc(x: number): number {
  return x * x + 2 * x + 3;
}
main();
