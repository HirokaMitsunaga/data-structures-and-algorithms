import { readFileSync } from "fs";

const input = readFileSync(0, "utf8").trim().split("\n");
const N = Number(input[0]);
const C = input[1].split(" ").map(Number);

let ans = BigInt(1);
const MOD = BigInt(1000000007);

C.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  const choices = BigInt(C[i] - i);

  if (choices <= 0) {
    console.log(0);
    process.exit(0);
  }

  ans = (ans * choices) % MOD;
}

console.log(ans.toString());
