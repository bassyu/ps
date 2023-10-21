const [N, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const map = Array(3)
  .fill(null)
  .map(() => Array(3).fill(0));

const judge = (turn) => {
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
  let result = false;
  lines.forEach((line) => {
    if (line.every(([y, x]) => map[y][x] === turn)) result = true;
  });

  return result;
};

let turn = Number(N);
let win = 0;
for (let i = 0; i < input.length; i += 1) {
  const [y, x] = input[i].split(" ").map((i) => Number(i) - 1);
  map[y][x] = turn;

  if (judge(turn)) {
    win = turn;
    break;
  }

  if (turn === 1) {
    turn = 2;
  } else {
    turn = 1;
  }
}

console.log(win);
