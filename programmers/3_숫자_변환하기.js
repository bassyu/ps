function solution(x, y, n) {
  const set = new Set();
  let head = 0;
  const q = [[x, 0]];
  while (q[head]) {
    const [number, depth] = q[head];
    delete q[head];
    head += 1;
    if (number === y) return depth;
    [number + n, number * 2, number * 3].forEach((next) => {
      if (next > y || set.has(next)) return;
      set.add(next);
      q.push([next, depth + 1]);
    });
  }

  return -1;
}
