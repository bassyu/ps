const INPUT = "./input";
const [N, input] = require("fs")
  .readFileSync(INPUT, "utf-8")
  .trim()
  .split("\n");

const n = Number(N);
const numbers = input.split(" ").map(Number);

let max = 0;
for (let a = 1; a < n; a += 1) {
  for (let b = a + 1; b < n; b += 1) {
    for (let c = b + 1; c < n; c += 1) {
      for (let d = c + 1; d < n + 1; d += 1) {
        const sum =
          numbers.slice(0, a).reduce((acc, cur) => acc * cur, 1) +
          numbers.slice(a, b).reduce((acc, cur) => acc * cur, 1) +
          numbers.slice(b, c).reduce((acc, cur) => acc * cur, 1) +
          numbers.slice(c, d).reduce((acc, cur) => acc * cur, 1);

        max = Math.max(max, sum);
      }
    }
  }
}

console.log(max);
