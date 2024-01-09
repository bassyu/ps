const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (x) {
  lines.push(x);
}).on("close", function () {
  solution();
  process.exit();
});

const lines = [];

function solution() {
  const [N, ...ropes] = lines;
  let max = 0;
  ropes
    .map(Number)
    .sort((a, b) => b - a)
    .forEach((rope, index) => {
      max = Math.max(max, rope * (index + 1));
    });

  console.log(max);
}
