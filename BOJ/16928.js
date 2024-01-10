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
  const [NM, ...xyList] = lines;

  const link = Array(101).fill(null);
  const visited = Array(101).fill(false);

  xyList.forEach((xy) => {
    const [x, y] = xy.split(" ").map(Number);
    link[x] = y;
  });

  const q = [[1, 0]];
  let pop = 0;
  while (pop < q.length) {
    const [location, count] = q[pop];
    pop += 1;

    if (location === 100) {
      console.log(count);
      break;
    }

    const go = [1, 2, 3, 4, 5, 6].map((i) => location + i);
    go.forEach((next) => {
      if (visited[next]) return;

      q.push([link[next] || next, count + 1]);
      visited[next] = true;
    });
  }
}
