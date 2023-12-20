function solution(n, results) {
  const win = Array(n + 1)
    .fill(0)
    .map(() => []);
  const lose = Array(n + 1)
    .fill(0)
    .map(() => []);
  results.forEach(([a, b]) => {
    win[a].push(b);
    lose[b].push(a);
  });

  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    let linked = 0;
    const visited = Array(n + 1).fill(false);
    visited[i] = true;

    [win, lose].forEach((graph) => {
      const stack = [i];
      while (stack.length) {
        const node = stack.pop();
        graph[node].forEach((go) => {
          if (visited[go]) return;

          stack.push(go);
          visited[go] = true;
          linked += 1;
        });
      }
    });

    if (linked === n - 1) {
      count += 1;
    }
  }

  return count;
}
