// 17:02

const INPUT = "./input";
const [N, ...map] = require("fs")
  .readFileSync(INPUT, "utf-8")
  .trim()
  .split("\n");

const dfs = (isAble) => {
  const visited = Array(Number(N))
    .fill(null)
    .map(() => Array(Number(N)).fill(false));

  let count = 0;

  for (let y = 0; y < N; y += 1) {
    for (let x = 0; x < N; x += 1) {
      if (visited[y][x]) continue;
      count += 1;

      const stack = [[y, x]];
      while (stack.length) {
        const [Y, X] = stack.pop();
        const go = [
          [Y + 1, X],
          [Y - 1, X],
          [Y, X + 1],
          [Y, X - 1],
        ];
        go.forEach(([y, x]) => {
          if (y < 0 || x < 0 || y >= N || x >= N) return;
          if (visited[y][x] || !isAble(map[Y][X], map[y][x])) return;

          stack.push([y, x]);
          visited[y][x] = true;
        });
      }
    }
  }

  return count;
};

console.log(
  dfs((a, b) => a === b),
  dfs((a, b) => {
    if (a === "B" || b === "B") {
      return a === b;
    } else {
      return true;
    }
  })
);
