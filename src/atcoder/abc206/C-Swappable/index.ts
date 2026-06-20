import { readFileSync } from "fs";

const input = readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);

  const count = new Map<number, number>();
  for (let v of A) {
    count.set(v, (count.get(v) ?? 0) + 1);
  }
  let ans = (BigInt(N) * BigInt(BigInt(N) - BigInt(1))) / BigInt(2);

  for (let x of count.values()) {
    ans -= (BigInt(x) * BigInt(BigInt(x) - BigInt(1))) / BigInt(2);
  }
  console.log(ans.toString());
};

main();
