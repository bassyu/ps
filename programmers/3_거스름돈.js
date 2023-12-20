function solution(n, money) {
  const memo = Array(n + 1).fill(0);
  memo[0] = 1;

  money.forEach((m) => {
    for (let i = m; i <= n; i += 1) {
      memo[i] += memo[i - m];
    }
  });

  return memo[n];
}
