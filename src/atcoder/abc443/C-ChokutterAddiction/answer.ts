import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, T] = input[0].trim().split(" ").map(Number);
const A = input[1].trim().split(" ").map(Number);

let res = 0;
let open = 0;

for (let i = 0; i < N; i++) {
  const a = A[i];
  if (open < a) {
    res += a - open;
    open = a + 100;
  }
}

if (open < T) {
  res += T - open;
}

console.log(res.toString());
