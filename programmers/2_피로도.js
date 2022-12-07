function solution(k, dungeons) {
  let max = 0;
  const visited = new Array(dungeons.length).fill(false);
  const dfs = (stamina, depth) => {
    max = Math.max(max, depth);
    for (let i = 0; i < dungeons.length; i += 1) {
      const dungeon = dungeons[i];
      if (visited[i] === true || stamina < dungeon[0]) continue;

      visited[i] = true;
      dfs(stamina - dungeon[1], depth + 1);
      visited[i] = false;
    }
  };

  dfs(k, 0);
  return max;
}
