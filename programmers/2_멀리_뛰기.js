function solution(n) {
  const dp = [1, 1];
  while (dp.length <= n) {
    const l = dp.length;
    dp.push((dp[l - 1] + dp[l - 2]) % 1234567);
  }

  return dp.pop();
}
