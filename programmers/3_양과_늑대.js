function solution(info, edges) {
  let max = 0;
  const visited = Array(info.length).fill(false);

  const dfs = (sheep, wolf) => {
    if (sheep <= wolf) return;

    max = Math.max(max, sheep);
    edges.forEach(([a, b]) => {
      if (!(visited[a] && !visited[b])) return;

      visited[b] = true;
      const isWolf = info[b];
      dfs(sheep + !isWolf, wolf + isWolf);
      visited[b] = false;
    });
  };

  visited[0] = true;
  dfs(1, 0);

  return max;
}
