import { readFileSync } from "fs";

const input = readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);

  const count = new Map<number, number>();
  for (const a of A) {
    count.set(a, (count.get(a) ?? 0) + 1);
  }

  let ans = (BigInt(N) * BigInt(N - 1)) / BigInt(2);

  count.forEach((v) => {
    ans -= (BigInt(v) * BigInt(v - 1)) / BigInt(2);
  });
  console.log(ans.toString());
};

main();
