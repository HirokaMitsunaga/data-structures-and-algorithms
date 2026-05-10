import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  // 入力の受け取り
  const [N, T] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);

  const Timesize = T / 100;
  let TimeArray = [];
  for (let index = 1; index <= Timesize; index++) {
    TimeArray[index] = index * 100;
  }

  let count = Timesize * 100;
  for (let index = 1; index <= Timesize; index++) {
    A.forEach((a) => {
      if (
        Math.floor(TimeArray[index] / a) === 1 &&
        TimeArray[index] % a !== 0
      ) {
        console.log(a);
        count -= TimeArray[index] % a;
      }
    });
  }

  console.log(count);
};
main();
