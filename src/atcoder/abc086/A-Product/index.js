const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const [a, b] = input[0].split(" ").map(Number);
  console.log((a * b) % 2 === 0 ? "Even" : "Odd");
};

main();
