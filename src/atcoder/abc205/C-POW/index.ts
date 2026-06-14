import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const [a, b, c] = input[0].split(" ").map(Number);

  let A: number, B: number;

  if (c % 2 === 0) {
    // Cが偶数の場合：絶対値で比較
    A = Math.abs(a);
    B = Math.abs(b);
  } else {
    // Cが奇数の場合：そのまま比較
    A = a;
    B = b;
  }

  if (A > B) {
    console.log(">");
  } else if (A < B) {
    console.log("<");
  } else {
    console.log("=");
  }
};
main();

/* 別解
const main = () => {
  const [A, B, C] = input[0].split(" ").map(Number);
  if (C % 2 !== 0) {
    console.log(A > B ? ">" : A < B ? "<" : "=");
  } else {
    const absA = Math.abs(A);
    const absB = Math.abs(B);
    console.log(absA > absB ? ">" : absA < absB ? "<" : "=");
  }
};
*/
