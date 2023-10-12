// 00:30

const INPUT = "./input";
const [NM, ...UV] = require("fs")
  .readFileSync(INPUT, "utf-8")
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const graph = Array(N + 1)
  .fill(null)
  .map(() => []);

UV.forEach((uv) => {
  const [u, v] = uv.split(" ").map(Number);
  if (!graph[u][v]) graph[u][v] = true;
  if (!graph[v][u]) graph[v][u] = true;
});

let count = 0;
const visited = new Set([]);

for (let i = 1; i < N + 1; i += 1) {
  if (visited.has(i)) continue;

  count += 1;
  const stack = [i];
  while (stack.length) {
    const cur = stack.pop();
    graph[cur].map((able, index) => {
      if (!able || visited.has(index)) return;

      visited.add(index);
      stack.push(index);
    });
  }
}

console.log(count);
