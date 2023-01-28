function solution(tickets) {
  const graph = {};
  tickets.forEach(([a, b]) => {
    if (graph[a] === undefined) graph[a] = [];
    graph[a].push(b);
  });

  Object.keys(graph).forEach((key) => {
    graph[key].sort().reverse();
  });

  let answer = null;
  const dfs = (node, path, remainder) => {
    if (remainder.length === 0) answer = path;
    if (graph[node] === undefined) return;

    graph[node].forEach((next) => {
      const useIndex = remainder.findIndex(
        ([a, b]) => a === node && b === next
      );
      if (useIndex === -1) return;
      dfs(
        next,
        path.concat(next),
        remainder.filter((value, index) => index !== useIndex)
      );
    });
  };

  dfs("ICN", ["ICN"], tickets);

  return answer;
}
