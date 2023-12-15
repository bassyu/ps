// 20:18

const solution = (board) => {
  const row = board.length;
  const col = board[0].length;

  const q = [];
  const visited = Array(row)
    .fill(null)
    .map(() => Array(col).fill(false));
  for (let y = 0; y < row; y += 1) {
    for (let x = 0; x < col; x += 1) {
      if (board[y][x] === "R") {
        q.push([y, x, 0]);
        visited[y][x] = true;
      }
    }
  }

  let head = 0;
  while (head < q.length) {
    const [Y, X, depth] = q[head];
    delete q[head];
    head += 1;

    if (board[Y][X] === "G") {
      return depth;
    }

    const go = [];

    let y = Y;
    let x = X;
    while (board[y - 1] && board[y - 1][x] !== "D") y -= 1;
    go.push([y, x]);

    y = Y;
    x = X;
    while (board[y + 1] && board[y + 1][x] !== "D") y += 1;
    go.push([y, x]);

    y = Y;
    x = X;
    while (board[y][x - 1] && board[y][x - 1] !== "D") x -= 1;
    go.push([y, x]);

    y = Y;
    x = X;
    while (board[y][x + 1] && board[y][x + 1] !== "D") x += 1;
    go.push([y, x]);

    go.forEach(([y, x]) => {
      if (visited[y][x]) return;

      q.push([y, x, depth + 1]);
      visited[y][x] = true;
    });
  }

  return -1;
};
