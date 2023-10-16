// 33:44

const [NM, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const map = input.map((row) => row.split(" ").map(Number));

let max = 0;
for (let y = 0; y < N; y += 1) {
  for (let x = 0; x < M; x += 1) {
    const gos = [
      [
        [y, x],
        [y, x + 1],
        [y, x + 2],
        [y, x + 3],
      ],
      [
        [y, x],
        [y + 1, x],
        [y + 2, x],
        [y + 3, x],
      ],
      [
        [y, x],
        [y + 1, x],
        [y, x + 1],
        [y + 1, x + 1],
      ],
      [
        [y, x],
        [y + 1, x],
        [y + 2, x],
        [y + 2, x + 1],
      ],
      [
        [y, x + 1],
        [y + 1, x + 1],
        [y + 2, x + 1],
        [y + 2, x],
      ],
      [
        [y, x],
        [y + 1, x],
        [y + 2, x],
        [y, x + 1],
      ],
      [
        [y, x],
        [y + 1, x + 1],
        [y + 2, x + 1],
        [y, x + 1],
      ],
      [
        [y, x],
        [y, x + 1],
        [y, x + 2],
        [y + 1, x + 2],
      ],
      [
        [y + 1, x],
        [y + 1, x + 1],
        [y + 1, x + 2],
        [y, x + 2],
      ],
      [
        [y, x],
        [y, x + 1],
        [y, x + 2],
        [y + 1, x],
      ],
      [
        [y, x],
        [y + 1, x + 1],
        [y + 1, x + 2],
        [y + 1, x],
      ],
      [
        [y, x],
        [y + 1, x],
        [y + 1, x + 1],
        [y + 2, x + 1],
      ],
      [
        [y, x],
        [y + 1, x],
        [y + 1, x + 1],
        [y + 2, x + 1],
      ],
      [
        [y, x + 1],
        [y + 1, x + 1],
        [y + 1, x],
        [y + 2, x],
      ],
      [
        [y, x],
        [y, x + 1],
        [y + 1, x + 1],
        [y + 1, x + 2],
      ],
      [
        [y + 1, x],
        [y + 1, x + 1],
        [y, x + 1],
        [y, x + 2],
      ],
      [
        [y, x],
        [y + 1, x],
        [y + 1, x + 1],
        [y + 2, x],
      ],
      [
        [y, x + 1],
        [y + 1, x + 1],
        [y + 1, x],
        [y + 2, x + 1],
      ],
      [
        [y, x],
        [y, x + 1],
        [y + 1, x + 1],
        [y, x + 2],
      ],
      [
        [y + 1, x],
        [y + 1, x + 1],
        [y, x + 1],
        [y + 1, x + 2],
      ],
    ];
    gos.forEach((go) => {
      const sum = go
        .map(([Y, X]) => {
          if (Y >= N || X >= M) return 0;
          return map[Y][X];
        })
        .reduce((acc, cur) => acc + cur, 0);

      max = Math.max(max, sum);
    });
  }
}

console.log(max);
