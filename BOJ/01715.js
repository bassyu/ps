const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (x) {
  lines.push(x);
}).on("close", function () {
  solution();
  process.exit();
});

class MinHeap {
  list = [];

  pop() {
    const min = this.list[0];
    const value = this.list.pop();
    if (this.list.length === 0) return value;

    let me = 0;
    while (me * 2 + 1 < this.list.length) {
      const left = me * 2 + 1;
      const right = left + 1;
      const child =
        right >= this.list.length || this.list[left] < this.list[right]
          ? left
          : right;
      if (value < this.list[child]) break;

      this.list[me] = this.list[child];
      me = child;
    }

    this.list[me] = value;

    return min;
  }

  push(value) {
    this.list.push(value);
    let me = this.list.length - 1;
    while (me > 0) {
      const parent = Math.ceil(me / 2) - 1;
      if (value > this.list[parent]) break;

      this.list[me] = this.list[parent];
      me = parent;
    }

    this.list[me] = value;
  }
}

const lines = [];

function solution() {
  const heap = new MinHeap();
  for (let i = 1; i < lines.length; i += 1) {
    heap.push(Number(lines[i]));
  }

  let acc = 0;
  while (heap.list.length >= 2) {
    const sum = heap.pop() + heap.pop();
    heap.push(sum);
    acc += sum;
  }

  console.log(acc);
}
