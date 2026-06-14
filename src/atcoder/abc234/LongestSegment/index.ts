import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const values = input.slice(1).map((value) => {
    const [x, y] = value.split(" ").map(Number);
    return [x, y];
  });

  let max = 0;
  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      let currentValue = 0;
      currentValue = Math.sqrt(
        (values[i][0] - values[j][0]) ** 2 + (values[i][1] - values[j][1]) ** 2,
      );
      if (max <= currentValue) {
        max = currentValue;
      }
    }
  }
  console.log(max);
};

main();
