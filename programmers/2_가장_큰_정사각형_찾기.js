function solution(board) {
  const row = board.length;
  const column = board[0].length;

  let max = 0;
  for (let r = 0; r < row; r += 1) {
    for (let c = 0; c < column; c += 1) {
      max = Math.max(max, board[r][c]);
    }
  }

  if (max === 0) {
    return 0;
  }

  for (let r = 1; r < row; r += 1) {
    for (let c = 1; c < column; c += 1) {
      if (board[r][c] !== 0) {
        board[r][c] =
          Math.min(board[r - 1][c], board[r][c - 1], board[r - 1][c - 1]) + 1;
        max = Math.max(max, board[r][c]);
      }
    }
  }

  return max ** 2;
}
