require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    lines.push(line);
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const lines = [];

function solution() {
  let S = Number(lines[0]);
  let N = 0;

  for (let i = 1; i <= S; i += 1) {
    N += 1;
    S -= i;
  }

  console.log(N);
}
