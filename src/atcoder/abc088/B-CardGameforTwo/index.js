function main() {
  // 入力の例: 5\n2 8 7 1 3\n
  const input = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split(/\s+/)
    .map(Number);
  const N = input[0];
  const A = input.slice(1, N + 1);

  A.sort((a, b) => b - a);

  const v = [0, 0];
  for (let i = 0; i < N; i++) {
    v[i % 2] += A[i];
  }
  const ans = v[0] - v[1];
  console.log(ans);
}

main();
