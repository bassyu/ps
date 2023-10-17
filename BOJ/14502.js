const [NM, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const map = input.map((row) => row.split(" ").map(Number));
const size = N * M;

const yx = (n) => [Math.floor(n / M), n % M];

let virus = [];
for (let y = 0; y < N; y += 1) {
  for (let x = 0; x < M; x += 1) {
    if (map[y][x] === 2) virus.push([y, x]);
  }
}

let max = 0;
for (let a = 0; a < size - 2; a += 1) {
  for (let b = a + 1; b < size - 1; b += 1) {
    for (let c = b + 1; c < size; c += 1) {
      const [ay, ax] = yx(a);
      const [by, bx] = yx(b);
      const [cy, cx] = yx(c);
      if (map[ay][ax] || map[by][bx] || map[cy][cx]) continue;

      const m = map.map((row) => row.slice());
      m[ay][ax] = 1;
      m[by][bx] = 1;
      m[cy][cx] = 1;

      const stack = virus.slice();
      while (stack.length) {
        const [y, x] = stack.pop();
        const go = [
          [y + 1, x],
          [y - 1, x],
          [y, x + 1],
          [y, x - 1],
        ];
        go.forEach(([y, x]) => {
          if (y < 0 || x < 0 || y >= N || x >= M) return;
          if (m[y][x] === 1 || m[y][x] === 2) return;

          stack.push([y, x]);
          m[y][x] = 2;
        });
      }

      let safe = 0;
      m.forEach((row) => {
        row.forEach((i) => {
          if (i === 0) {
            safe += 1;
          }
        });
      });

      max = Math.max(max, safe);
    }
  }
}

console.log(max);
