// 14:58

const solution = (n) => a2b(1, 3, n);

const a2b = (a, b, count) => {
  if (count === 1) return [[a, b]];

  const temp = [1, 2, 3].filter((i) => i !== a && i !== b)[0];
  return [...a2b(a, temp, count - 1), [a, b], ...a2b(temp, b, count - 1)];
};
