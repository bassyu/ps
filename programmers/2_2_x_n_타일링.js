function solution(n) {
  const dp = [1, 2];
  for (let i = 2; i < n; i += 1) {
    dp.push((dp[i - 1] + dp[i - 2]) % 1000000007);
  }

  return dp.pop();
}
