/**
 * 数値配列をマージソートで昇順に並び替える
 * @param {number[]} arr - ソート対象の配列
 * @returns {number[]} ソート済みの新しい配列（元の配列は変更しない）
 */
const mergeSort = (arr: number[]): number[] => {
  const arrLength = arr.length;
  if (arrLength <= 1) {
    return arr; // 配列が1つ以下の要素しか持たない場合、そのまま返す
  }

  const middle = Math.floor(arrLength / 2); // 配列を2つの部分に分割するための中間点を計算
  const left = arr.slice(0, middle); // 左半分の配列
  const right = arr.slice(middle); // 右半分の配列

  return merge(mergeSort(left), mergeSort(right)); // 再帰的にソートしてマージ
};
const merge = (left: number[], right: number[]): number[] => {
  let result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // 左右の配列を比較しながらマージ
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // 残りの要素を結果に追加
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
const randomNumbers = [4, 3, 6, 9, 8, 2, 5, 1, 7];
const sortedNumbers = mergeSort(randomNumbers);

console.log("元の配列:", randomNumbers);
console.log("ソートされた配列:", sortedNumbers);
