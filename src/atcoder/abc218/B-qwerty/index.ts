import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const main = () => {
  const P = input[0].split(" ").map(Number);
  const aCode = "a".charCodeAt(0); //aの文字コードを取得(97)
  const result = P.map((p) => {
    return String.fromCharCode(aCode + p - 1); //−１することで1の場合にaとなるように対応
  }).join(""); //join入れないと配列が出力される
  console.log(result);
};
main();
