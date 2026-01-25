import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const [a, b] = input[0].split(" ").map(Number);

  console.log((a / 100) * b);
};
main();
