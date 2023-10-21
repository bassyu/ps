const [NM] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

let [N, M] = NM.split(" ").map(Number);
let turn = false;
while (N < 5 && M < 5) {
  if (turn) {
    N += M;
  } else {
    M += N;
  }

  turn = !turn;
}

console.log(["yj", "yt"][Number(turn)]);
