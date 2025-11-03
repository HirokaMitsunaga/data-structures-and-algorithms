function getMaxDifference(R: number[]): number {
  let diffMax = -(10 ** 10); // 最大の差（初期値：非常に小さい数）
  let minNum = 10 ** 10; // 最小値（初期値：非常に大きい数）

  for (let i = 0; i < R.length; i++) {
    diffMax = Math.max(R[i] - minNum, diffMax); // 現在の値と最小値の差を比較して更新
    minNum = Math.min(R[i], minNum); // これまでの最小値を更新
  }

  return diffMax;
}

// ✅ 使用例
const R = [5, 3, 1, 3, 4, 3];
console.log(getMaxDifference(R)); // → 3
