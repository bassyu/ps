const input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n")
  .map(Number);

input.pop();

const memo = Array(1000002).fill(true);

const prime = [];
for (let i = 2; i <= 1000002; i += 1) {
  if (!memo[i]) continue;

  prime.push(i);
  for (let p = i + i; p < 1000002; p += i) {
    memo[p] = false;
  }
}

const output = [];
input.forEach((n) => {
  for (let i = 0; i < prime.length; i += 1) {
    const a = prime[i];
    if (memo[n - a]) {
      output.push(`${n} = ${a} + ${n - a}`);
      break;
    }
  }
});

console.log(output.join("\n"));
