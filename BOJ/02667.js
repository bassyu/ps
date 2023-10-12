// 30 sort
// 42

const INPUT = "./input";
const [N, ...map] = require("fs")
  .readFileSync(INPUT, "utf-8")
  .trim()
  .split("\n");

const sections = [];
const visited = Array(Number(N))
  .fill(null)
  .map(() => Array(Number(N)).fill(false));

for (let y = 0; y < N; y += 1) {
  for (let x = 0; x < N; x += 1) {
    if (map[y][x] === "0" || visited[y][x]) continue;

    let section = 0;
    const stack = [[y, x]];
    visited[y][x] = true;

    while (stack.length) {
      section += 1;
      const [Y, X] = stack.pop();

      const go = [
        [Y, X + 1],
        [Y, X - 1],
        [Y - 1, X],
        [Y + 1, X],
      ];
      go.forEach(([Y_, X_]) => {
        if (Y_ < 0 || X_ < 0 || Y_ >= N || X_ >= N) return;
        if (map[Y_][X_] === "0" || visited[Y_][X_]) return;

        stack.push([Y_, X_]);
        visited[Y_][X_] = true;
      });
    }

    sections.push(section);
  }
}

console.log(sections.length);
sections
  .sort((a, b) => a - b)
  .forEach((section) => {
    console.log(section);
  });
