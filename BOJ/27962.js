const [N, input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const n = Number(N);

let result = "NO";
for (let size = 1; size <= N; size += 1) {
  const a = input.slice(0, size);
  const b = input.slice(n - size);

  let diff = 0;
  for (let i = 0; i < size; i += 1) {
    if (a[i] !== b[i]) diff += 1;
  }

  if (diff === 1) {
    result = "YES";
  }
}

console.log(result);
