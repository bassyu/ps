const INPUT = process.platform === "linux" ? 0 : "./input";
const [T, ...input] = require("fs")
  .readFileSync(INPUT, "utf-8")
  .trim()
  .split("\n");

const memo = [0, 1, 2, 3];

for (let i = 4; i <= 10000; i += 1) {
  const more = i % 3 === 0 ? 1 : 0;
  memo.push(memo[i - 1] + memo[i - 2] - memo[i - 3] + more);
}

console.log(input.map((i) => String(memo[Number(i)])).join("\n"));
