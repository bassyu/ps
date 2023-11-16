function solution(m, n, puddles) {
  const mod = 1000000007;
  const memo = Array(n)
    .fill(null)
    .map(() => Array(m).fill(0));
  memo[0][0] = 1;

  puddles.forEach(([x, y]) => {
    memo[y - 1][x - 1] = -1;
  });

  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < m; x += 1) {
      if (memo[y][x] === -1) {
        memo[y][x] = 0;
        continue;
      }

      if (y > 0) memo[y][x] += memo[y - 1][x] % mod;
      if (x > 0) memo[y][x] += memo[y][x - 1] % mod;
    }
  }

  return memo[n - 1][m - 1];
}
