function solution(n, m, section) {
  const paint = Array(n).fill(true);
  section.forEach((i) => {
    paint[i - 1] = false;
  });

  let count = 0;
  for (let i = 0; i < n; i += 1) {
    if (paint[i]) continue;

    count += 1;
    for (let j = i; j < i + m; j += 1) {
      paint[j] = true;
    }
  }

  return count;
}
