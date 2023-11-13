function solution(maps) {
  const row = maps.length;
  const column = maps[0].length;

  const bfs = (start, end) => {
    const q = [[start, 0]];
    const visited = Array(row)
      .fill(null)
      .map(() => Array(column).fill(false));
    let head = 0;
    while (head < q.length) {
      const [[y, x], length] = q[head];
      delete q[head];
      head += 1;

      if (y === end[0] && x === end[1]) {
        return length;
      }

      const go = [
        [y + 1, x],
        [y - 1, x],
        [y, x + 1],
        [y, x - 1],
      ];
      go.forEach(([Y, X]) => {
        if (Y >= row || X >= column || Y < 0 || X < 0) return;
        if (visited[Y][X] || maps[Y][X] === "X") return;

        q.push([[Y, X], length + 1]);
        visited[Y][X] = true;
      });
    }

    return 0;
  };

  let S;
  let L;
  let E;
  for (let y = 0; y < row; y += 1) {
    for (let x = 0; x < column; x += 1) {
      const c = maps[y][x];
      if (c === "S") {
        S = [y, x];
      } else if (c === "L") {
        L = [y, x];
      } else if (c === "E") {
        E = [y, x];
      }
    }
  }

  const S2L = bfs(S, L);
  const L2E = bfs(L, E);

  return S2L && L2E ? S2L + L2E : -1;
}
