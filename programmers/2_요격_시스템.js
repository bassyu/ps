function solution(targets) {
  const stack = targets.sort(([, a], [, b]) => b - a);
  let count = 0;
  while (stack.length) {
    const [s, e] = stack.pop();
    count += 1;

    while (stack.length && stack[stack.length - 1][0] < e) {
      stack.pop();
    }
  }

  return count;
}
