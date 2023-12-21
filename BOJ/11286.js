// 39:12

class Heap {
  list = [];

  push(value) {
    this.list.push(value);
    let me = this.list.length - 1;
    while (me > 0) {
      const parent = Math.ceil(me / 2) - 1;
      if (
        Math.abs(value) < Math.abs(this.list[parent]) ||
        (Math.abs(value) === Math.abs(this.list[parent]) &&
          value < this.list[parent])
      ) {
        this.list[me] = this.list[parent];
        me = parent;
      } else {
        break;
      }
    }

    this.list[me] = value;
  }

  pop() {
    if (this.list.length === 0) return 0;

    const out = this.list[0];
    const value = this.list.pop();

    if (this.list.length == 0) return out;

    let me = 0;
    while (me * 2 + 1 < this.list.length) {
      const left = me * 2 + 1;
      const right = me * 2 + 2;
      const child =
        !this.list[right] ||
        Math.abs(this.list[left]) < Math.abs(this.list[right]) ||
        (Math.abs(this.list[left]) === Math.abs(this.list[right]) &&
          this.list[left] < this.list[right])
          ? left
          : right;

      if (
        Math.abs(value) > Math.abs(this.list[child]) ||
        (Math.abs(value) === Math.abs(this.list[child]) &&
          value > this.list[child])
      ) {
        this.list[me] = this.list[child];
        me = child;
      } else {
        break;
      }
    }

    this.list[me] = value;

    return out;
  }
}

const heap = new Heap();

const [N, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const output = [];
input.map(Number).forEach((number) => {
  if (number === 0) {
    output.push(heap.pop());
  } else {
    heap.push(number);
  }
});

console.log(output.join("\n"));
