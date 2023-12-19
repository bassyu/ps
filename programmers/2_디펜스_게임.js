// 완탐 = 2 ** 1000000 = 안됨

// 구간에서의 최대값 k 개 구하기
// 이전 최대값 모음집의 최약채와 현재값 비교하기
// > 무적권을 사용한 애들 중 가장 낮을 값 비교
// > 현재 값이 더 높으면 최약채 대신 현재 값으로 무적권 대체
// > 최소힙

class Heap {
  q = [];

  push(value) {
    this.q.push(value);

    let index = this.q.length - 1;
    while (index > 0) {
      const parent = Math.ceil(index / 2) - 1;
      if (value >= this.q[parent]) break;

      this.q[index] = this.q[parent];
      index = parent;
    }

    this.q[index] = value;
  }

  pop() {
    if (!this.q.length) return null;

    const first = this.q[0];
    const last = this.q.pop();

    let index = 0;
    while (index * 2 + 1 < this.q.length) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      const child =
        right >= this.q.length || this.q[left] <= this.q[right] ? left : right;

      if (last <= this.q[child]) break;

      this.q[index] = this.q[child];
      index = child;
    }

    this.q[index] = last;

    return first;
  }
}

function solution(n, k, enemy) {
  const heap = new Heap();

  for (let round = 0; round < enemy.length; round += 1) {
    const count = enemy[round];

    if (k > 0) {
      heap.push(count);
      k -= 1;
      continue;
    }

    if (count > heap.q[0]) {
      n -= heap.pop();
      heap.push(count);
    } else {
      n -= count;
    }

    if (n < 0) return round;
  }

  return enemy.length;
}
