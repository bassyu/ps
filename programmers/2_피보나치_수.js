function solution(n) {
  const f = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    f.push((f[i - 1] + f[i - 2]) % 1234567);
  }

  return f.pop();
}
