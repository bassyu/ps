function solution(sticker) {
  if (sticker.length <= 3) return Math.max(...sticker);

  const dp = (list) => {
    const memo = [...list];
    for (let i = 1; i < memo.length - 1; i += 1) {
      memo[i] = Math.max(memo[i - 1], (memo[i - 2] || 0) + memo[i]);
    }

    return memo[memo.length - 2];
  };

  return Math.max(dp(sticker), dp(sticker.reverse()));
}
