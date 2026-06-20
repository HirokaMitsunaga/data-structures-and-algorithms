import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  let N = BigInt(input[0]);
  let ans = [];
  while (N > BigInt(0)) {
    if (N % BigInt(2) === BigInt(0)) {
      N = N / BigInt(2);
      ans.push("B");
    } else {
      N -= BigInt(1);
      ans.push("A");
    }
  }
  ans.reverse();
  console.log(ans.join(""));
};
main();
