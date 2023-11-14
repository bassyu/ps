function solution(k, d) {
  let count = 0;
  for (let i = 0; i <= d; i += k) {
    const row = Math.sqrt(d ** 2 - i ** 2);
    count += 1 + Math.floor(row / k);
  }

  return count;
}
