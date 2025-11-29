// main.ts
import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const [N, W] = input[0].split(" ").map(Number);
  const cheeses = input.slice(1, N + 1).map((line) => {
    const [A, B] = line.split(" ").map(Number);
    return { deliciousness: A, weight: B };
  });

  cheeses.sort((b, a) => b.deliciousness - a.deliciousness);

  let sumDeliciousness = 0;
  let count = W;

  while (count != 0) {
    cheeses.forEach((val) => {
      for (let i = 0; i < val.weight; i++) {
        sumDeliciousness += val.deliciousness;
        count -= i;
        if (count === 0) {
          console.log(sumDeliciousness);
          return;
        }
      }
    });
  }
};

main();
