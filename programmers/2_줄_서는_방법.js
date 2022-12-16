function solution(n, k) {
  const answer = [];
  const factorial = (n) => (n > 1 ? n * factorial(n - 1) : 1);

  const permu = (arr, n, k) => {
    if (n === 0) return;
    const f = factorial(n - 1);
    const i = Math.floor(k / f);
    answer.push(arr[i]);
    permu(arr.slice(0, i).concat(arr.slice(i + 1)), n - 1, k % f);
  };

  const arr = Array(n)
    .fill()
    .map((value, index) => index + 1);
  permu(arr, n, k - 1);

  return answer;
}
