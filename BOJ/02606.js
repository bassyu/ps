const [N, edgeSize, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const graph = Array(Number(N) + 1)
  .fill(null)
  .map(() => []);

input.forEach((row) => {
  const [a, b] = row.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});

const stack = [1];
const visited = new Set([1]);
while (stack.length) {
  const node = stack.pop();
  graph[node].forEach((go) => {
    if (visited.has(go)) return;

    stack.push(go);
    visited.add(go);
  });
}

console.log(visited.size - 1);
