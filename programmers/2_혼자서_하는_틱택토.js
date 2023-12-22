function solution(board) {
  let O = 0;
  let X = 0;
  let lineO = 0;
  let lineX = 0;
  let crossO = 0;
  let crossX = 0;

  const lines = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
  ];
  lines.forEach((line) => {
    if (line.every(([y, x]) => board[y][x] === "O")) lineO += 1;
    if (line.every(([y, x]) => board[y][x] === "X")) lineX += 1;
  });
  const crosses = [
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];
  crosses.forEach((cross) => {
    if (cross.every(([y, x]) => board[y][x] === "O")) crossO += 1;
    if (cross.every(([y, x]) => board[y][x] === "X")) crossX += 1;
  });

  for (let y = 0; y < 3; y += 1) {
    for (let x = 0; x < 3; x += 1) {
      if (board[y][x] === "O") {
        O += 1;
      } else if (board[y][x] === "X") {
        X += 1;
      }
    }
  }

  let able = 1;
  if ((O + X) % 2 === 0) {
    if (O !== X) able = 0;
    if (lineO >= 1 || crossO >= 1) able = 0;
  } else {
    if (O - 1 !== X) able = 0;
    if (lineX >= 1 || crossX >= 1) able = 0;
  }

  return able;
}
