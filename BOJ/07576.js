// 24:00 queue unshift 시간초과
// 31:20

const INPUT = "./input";
const [MN, ...input] = require("fs")
  .readFileSync(INPUT, { encoding: "utf-8" })
  .trim()
  .split("\n");

const [M, N] = MN.split(" ").map(Number);
const map = input.map((row) => row.split(" ").map(Number));

const q = [];
for (let y = 0; y < N; y += 1) {
  for (let x = 0; x < M; x += 1) {
    if (map[y][x] === 1) q.push([y, x, 0]);
  }
}

let max = 0;
let index = 0;
while (q.length && q.length > index) {
  const [y, x, day] = q[index];
  delete q[index];
  index += 1;

  max = Math.max(max, day);

  const go = [
    [y + 1, x],
    [y - 1, x],
    [y, x + 1],
    [y, x - 1],
  ];
  go.forEach(([Y, X]) => {
    if (Y < 0 || X < 0 || Y >= N || X >= M) return;
    if (map[Y][X] !== 0) return;

    q.push([Y, X, day + 1]);
    map[Y][X] = 1;
  });
}

console.log(map.some((row) => row.some((tomato) => tomato === 0)) ? -1 : max);
