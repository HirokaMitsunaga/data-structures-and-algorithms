// main.js
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const a = String(input[0]).split("");
  checkString(a);
};

function checkString(a: string[]) {
  const words = ["dream", "dreamer", "erase", "eraser"];

  while (a.length > 0) {
    let found = false;

    for (const word of words) {
      if (a.length >= word.length) {
        const end = a.slice(-word.length).join("");
        if (end === word) {
          a.splice(-word.length, word.length);
          found = true;
          break;
        }
      }
    }

    if (!found) {
      console.log("NO");
      return;
    }
  }

  console.log("YES");
}

main();
