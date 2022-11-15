function solution(a, b, n) {
  let count = 0;
  while (n >= 2) {
    const newCoke = parseInt(n / a) * b;
    if (newCoke === 0) break;
    count += newCoke;
    n = (n % a) + newCoke;
  }

  return count;
}
