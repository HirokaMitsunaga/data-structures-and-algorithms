class Deque<T> {
  private data: { [key: number]: T } = {};
  private head: number = 0;
  private tail: number = 0;

  // 右に追加（append）
  push(value: T) {
    this.data[this.tail] = value;
    this.tail++;
  }

  // 左に追加（appendleft）
  unshift(value: T) {
    this.head--;
    this.data[this.head] = value;
  }

  // 左から取り出し
  shift(): T | undefined {
    if (this.isEmpty()) return undefined;
    const value = this.data[this.head];
    delete this.data[this.head];
    this.head++;
    return value;
  }

  // 右から取り出し
  pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    this.tail--;
    const value = this.data[this.tail];
    delete this.data[this.tail];
    return value;
  }

  isEmpty(): boolean {
    return this.head === this.tail;
  }

  // 出力用
  toArray(): T[] {
    const result: T[] = [];
    for (let i = this.head; i < this.tail; i++) {
      result.push(this.data[i]);
    }
    return result;
  }
}

import * as fs from "fs";

const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const N = Number(input[0]);
const S = input[1];

const que = new Deque<number>();

// Nを追加
que.push(N);

// 後ろから処理
for (let i = N - 1; i >= 0; i--) {
  console.log(que.toArray().join(" "));
  //Sのi文字目が「R」
  if (S[i] === "R") {
    //先頭(左端)へ「i」を追加
    que.unshift(i);
    //そうでない場合(Sのi文字目が「L」)
  } else {
    //末端(右端)へ「iを追加」
    que.push(i);
  }
}

// 出力
console.log(que.toArray().join(" "));
