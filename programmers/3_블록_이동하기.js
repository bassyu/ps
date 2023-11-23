// 01:13:11

function solution(board) {
  const r = board.length;
  const c = board[0].length;

  const q = [[[0, 0], [0, 1], 0]];
  const visited = new Set([`${0} ${0} ${0} ${1}`]);
  let head = 0;
  while (head < q.length) {
    const [[ay, ax], [by, bx], length] = q[head];
    delete q[head];
    head += 1;

    const go = [
      [
        [ay, ax + 1],
        [by, bx + 1],
      ],
      [
        [ay, ax - 1],
        [by, bx - 1],
      ],
      [
        [ay + 1, ax],
        [by + 1, bx],
      ],
      [
        [ay - 1, ax],
        [by - 1, bx],
      ],
    ];

    if (ay === by) {
      if (board[by - 1] && board[by - 1][bx] === 0)
        go.push([
          [ay - 1, ax],
          [ay, ax],
        ]);
      if (board[ay - 1] && board[ay - 1][ax] === 0)
        go.push([
          [by - 1, bx],
          [by, bx],
        ]);
      if (board[by + 1] && board[by + 1][bx] === 0)
        go.push([
          [ay, ax],
          [ay + 1, ax],
        ]);
      if (board[ay + 1] && board[ay + 1][ax] === 0)
        go.push([
          [by, bx],
          [by + 1, bx],
        ]);
    } else {
      if (board[bx - 1] && board[by][bx - 1] === 0)
        go.push([
          [ay, ax - 1],
          [ay, ax],
        ]);
      if (board[ax - 1] && board[ay][ax - 1] === 0)
        go.push([
          [by, bx - 1],
          [by, bx],
        ]);
      if (board[bx + 1] && board[by][bx + 1] === 0)
        go.push([
          [ay, ax],
          [ay, ax + 1],
        ]);
      if (board[ax + 1] && board[ay][ax + 1] === 0)
        go.push([
          [by, bx],
          [by, bx + 1],
        ]);
    }

    go.forEach(([[aY, aX], [bY, bX]]) => {
      const key = `${aY} ${aX} ${bY} ${bX}`;
      if (visited.has(key)) return;
      if (aY < 0 || aX < 0 || bY < 0 || bX < 0) return;
      if (aY >= r || aX >= c || bY >= r || bX >= c) return;
      if (board[aY][aX] !== 0 || board[bY][bX] !== 0) return;

      q.push([[aY, aX], [bY, bX], length + 1]);
      visited.add(key);
    });

    if (by === r - 1 && bx === c - 1) {
      return length;
    }
  }
}
