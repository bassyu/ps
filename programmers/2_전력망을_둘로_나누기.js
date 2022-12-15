function solution(n, wires) {
  const getDiff = ([aIgnore, bIgnore]) => {
    const graph = [];
    while (graph.length <= n) {
      graph.push([]);
    }

    wires.forEach(([a, b]) => {
      if (aIgnore === a && bIgnore === b) return;
      graph[a].push(b);
      graph[b].push(a);
    });

    const visited = new Set();
    const bfs = (node) => {
      visited.add(node);
      graph[node].forEach((next) => {
        if (visited.has(next) === false) bfs(next);
      });
    };

    bfs(1);
    return Math.abs(visited.size - (n - visited.size));
  };

  return Math.min(...wires.map(getDiff));
}
