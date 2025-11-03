/**
 * 数値配列をバブルソートで昇順に並び替える
 * @param {number[]} arr - ソート対象の配列
 * @returns {number[]} ソート済みの新しい配列（元の配列は変更しない）
 */
function bubbleSort(arr: number[]): number[] {
  const arrLength = arr.length;
  const result = [...arr];

  for (let i = 0; i < arrLength - 1; i++) {
    //配列の要素が小さい順に比べる
    for (let j = 0; j < arrLength - 1 - i; j++) {
      //外側のループが1回終わる度に、末尾からソート済みの要素が1つずつ増えるため、比較範囲を-iで縮小する
      if (result[j] > result[j + 1]) {
        const tmp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = tmp;
      }
    }
  }
  return result;
}

const randomNumbers = [4, 3, 6, 9, 8, 2, 5, 1, 7];
const sortedNumbers = bubbleSort(randomNumbers);

console.log("元の配列:", randomNumbers);
console.log("ソートされた配列:", sortedNumbers);
