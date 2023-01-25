function solution(n) {
  const getCount = (number) =>
    number
      .toString(2)
      .split("")
      .filter((c) => c === "1").length;

  for (let i = n + 1; i < n * 2; i += 1) {
    if (getCount(n) === getCount(i)) return i;
  }
}
