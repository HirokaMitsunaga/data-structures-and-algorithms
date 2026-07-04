import { readFileSync } from "fs";

const input = readFileSync(0, "utf8").trim().split("\n");
const N = Number(input[0]);
const C = input[1].split(" ").map(Number);

let ans = 1n;
const MOD = 1000000007n;

C.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  const choices = C[i] - i;

  if (choices <= 0) {
    console.log(0);
    process.exit(0);
  }

  ans = (ans * BigInt(choices)) % MOD;
}

console.log(ans.toString());
