function solution(n, edge) {
  const graph = {};
  for (let i = 1; i <= n; i += 1) {
    graph[i] = [];
  }

  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const count = {};
  const q = [[1, 0]];
  const visited = new Set([1]);
  while (q.length !== 0) {
    const [node, depth] = q.shift();
    if (count[depth]) {
      count[depth] += 1;
    } else {
      count[depth] = 1;
    }

    graph[node].forEach((next) => {
      if (visited.has(next)) return;
      visited.add(next);
      q.push([next, depth + 1]);
    });
  }

  return count[Math.max(...Object.keys(count))];
}
