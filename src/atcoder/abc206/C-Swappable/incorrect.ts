import { readFileSync } from "fs";

const input = readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const A = input[1].split(" ").map(Number);

  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] !== A[j]) {
        count++;
      }
    }
  }
  console.log(count);
};

main();
