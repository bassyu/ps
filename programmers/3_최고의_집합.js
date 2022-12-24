function solution(n, s) {
  if (n > s) return [-1];
  const set = new Array(n).fill(Math.floor(s / n));
  for (let i = 0; i < s % n; i += 1) {
    set[i] += 1;
  }

  return set.sort((a, b) => a - b);
}
