import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const mountains = input.slice(1).map((line) => {
    const [name, height] = line.split(" ");
    return { name, height: Number(height) };
  });

  mountains.sort((a, b) => b.height - a.height);
  console.log(mountains[1].name); //2番目なので要素の一つ目を指定する
};

main();
