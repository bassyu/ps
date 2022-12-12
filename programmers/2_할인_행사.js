function solution(want, number, discount) {
  const wantNumbers = {};
  for (let i = 0; i < want.length; i += 1) {
    wantNumbers[want[i]] = number[i];
  }

  let count = 0;
  for (let i = 0; i <= discount.length - 10; i += 1) {
    const current = {};
    discount.slice(i, i + 10).forEach((d) => {
      current[d] = current[d] === undefined ? 1 : current[d] + 1;
    });

    count += want.every((w) => wantNumbers[w] <= current[w]);
  }

  return count;
}
