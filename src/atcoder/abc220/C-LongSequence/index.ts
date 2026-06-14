import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const A = input[1].split(" ").map(BigInt);
  const X = BigInt(input[2]);

  let kou = BigInt(0);

  let aSum = BigInt(0);
  for (const value of A) {
    kou++;
    if (X < aSum) {
      console.log(kou.toString());
      return;
    }
    aSum += value;
  }
  // for of　の部分いらなくて以下だけでいい。
  // const sum = a.reduce((acc, val) => acc + val, BigInt(0));

  const shou = X / aSum;

  let count = shou * aSum;
  kou = shou * BigInt(A.length);

  for (let index = 0; index < A.length; index++) {
    count += A[index];
    kou++;

    if (X < count) {
      console.log(kou.toString());
      return;
    }
  }
};

main();
