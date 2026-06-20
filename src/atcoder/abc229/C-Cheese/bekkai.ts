import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const [N, W] = input[0].split(" ").map(Number);

  const cheeses = input.slice(1).map((value) => {
    const [delicious, weight] = value.split(" ").map(Number);
    return { delicious, weight };
  });

  cheeses.sort((a, b) => b.delicious - a.delicious);

  let totalWeight = 0;
  let totalDelicious = BigInt(0);

  for (const cheese of cheeses) {
    if (totalWeight + cheese.weight <= W) {
      totalDelicious += BigInt(cheese.weight) * BigInt(cheese.delicious);
      totalWeight += cheese.weight;
    } else {
      totalDelicious += BigInt(W - totalWeight) * BigInt(cheese.delicious);
      break;
    }
  }

  console.log(totalDelicious.toString());
};

main();
