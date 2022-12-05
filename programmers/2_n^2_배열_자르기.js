function solution(n, left, right) {
  const result = [];
  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n) + 1;
    const col = (i % n) + 1;
    result.push(Math.max(row, col));
  }

  return result;
}
