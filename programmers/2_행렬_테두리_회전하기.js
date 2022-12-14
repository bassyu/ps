function solution(rows, columns, queries) {
  const board = [];
  for (let row = 0; row < rows; row += 1) {
    board.push([...Array(columns).keys()].map((i) => i + 1 + row * columns));
  }

  return queries.map((querie) => {
    const [rs, cs, re, ce] = querie.map((x) => x - 1);
    let min = board[rs][cs];
    const temp = board[rs][cs];
    for (let r = rs; r < re; r += 1) {
      board[r][cs] = board[r + 1][cs];
      min = Math.min(min, board[r][cs]);
    }

    for (let c = cs; c < ce; c += 1) {
      board[re][c] = board[re][c + 1];
      min = Math.min(min, board[re][c]);
    }

    for (let r = re; r > rs; r -= 1) {
      board[r][ce] = board[r - 1][ce];
      min = Math.min(min, board[r][ce]);
    }

    for (let c = ce; c > cs; c -= 1) {
      board[rs][c] = board[rs][c - 1];
      min = Math.min(min, board[rs][c]);
    }

    board[rs][cs + 1] = temp;
    return min;
  });
}
