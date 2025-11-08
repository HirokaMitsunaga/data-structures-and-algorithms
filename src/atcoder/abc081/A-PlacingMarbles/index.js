// main.js
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const a = input[0].split("").map(Number);
  let count = 0;
  a.map((val) => {
    if (val === 1) {
      count++;
    }
  });
  console.log(count);
};

main();
