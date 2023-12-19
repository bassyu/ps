function solution(n, times) {
  let min = 0;
  let left = 0;
  let right = 1000000000 ** 2 + 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (count >= n) {
      min = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return min;
}
