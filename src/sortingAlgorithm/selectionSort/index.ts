/**
 * 数値配列を選択ソートで昇順に並び替える
 * @param {number[]} arr - ソート対象の配列
 * @returns {number[]} ソート済みの新しい配列（元の配列は変更しない）
 */

function selectionSort(arr: number[]): number[] {
  const arrLength = arr.length;
  const result = [...arr];

  for (let i = 0; i < arrLength - 1; i++) {
    let minIndex = i;
    //未ソート部分から最小値を見つける
    for (let j = i + 1; j < arrLength; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    //最小値を未ソートの部分の先頭と交換
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }
  return result;
}

const randomNumbers = [4, 3, 6, 9, 8, 2, 5, 1, 7];
const sortedNumbers = selectionSort(randomNumbers);

console.log("元の配列:", randomNumbers);
console.log("ソートされた配列:", sortedNumbers);
