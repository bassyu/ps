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
  const T = Number(lines[0]);
  let n = 1;
  const output = [];
  for (let t = 0; t < T; t += 1) {
    const N = Number(lines[n]);

    const list = [];
    for (let i = n + 1; i < n + 1 + N; i += 1) {
      list.push(lines[i].split(" ").map(Number));
    }

    list.sort(([a], [b]) => b - a);

    const min = Array(N);
    min[N - 1] = list[N - 1][1];
    for (let i = N - 2; i >= 0; i -= 1) {
      min[i] = Math.min(list[i][1], min[i + 1]);
    }

    let count = N;
    for (let i = 0; i < N; i += 1) {
      if (list[i][1] > min[i + 1]) {
        count -= 1;
      }
    }

    output.push(count);
    n += N + 1;
  }

  console.log(output.join("\n"));
}
