// main.js
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// C++のcalc関数と同じロジック
const calc = (n) => {
  let res = 0;
  while (n > 0) {
    res += n % 10;
    n = Math.floor(n / 10);
  }
  return res;
};

const main = () => {
  const [N, A, B] = input[0].split(" ").map(Number);

  let res = 0;
  for (let n = 1; n <= N; n++) {
    const wa = calc(n);
    if (wa >= A && wa <= B) {
      res += n;
    }
  }

  console.log(res);
};

main();
