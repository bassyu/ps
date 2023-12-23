function solution(n, roads, sources, destination) {
  const graph = Array(n + 1)
    .fill(0)
    .map(() => []);
  roads.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const map = Array(n + 1).fill(-1);
  const visited = Array(n + 1).fill(false);
  visited[destination] = true;
  const q = [[destination, 0]];
  let head = 0;
  while (head < q.length) {
    const [node, distance] = q[head];
    delete q[head];
    head += 1;

    map[node] = distance;

    graph[node].forEach((go) => {
      if (visited[go]) return;

      q.push([go, distance + 1]);
      visited[go] = true;
    });
  }

  return sources.map((source) => map[source]);
}
