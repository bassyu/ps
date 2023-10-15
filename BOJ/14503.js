// 50:00

const [NM, rcd, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const [r, c, d] = rcd.split(" ").map(Number);
const map = input.map((row) => row.split(" ").map(Number));
const clean = map.map((row) => row.map(() => false));
let state = [r, c, d];
let count = 0;

const isClean = (go) =>
  go.every(([r, c]) => {
    if (r < 0 || c < 0 || r >= N || c >= M) return true;
    return map[r][c] === 1 || clean[r][c];
  });

const makeGo = (y, x) => [
  [y - 1, x],
  [y, x + 1],
  [y + 1, x],
  [y, x - 1],
];

const makeBack = (r, c, d) =>
  [
    [r + 1, c],
    [r, c - 1],
    [r - 1, c],
    [r, c + 1],
  ][d];

const rotate = (d) => [3, 0, 1, 2][d];

while (true) {
  const [r, c, d] = state;

  if (!clean[r][c]) {
    clean[r][c] = true;
    count += 1;
  }

  const go = makeGo(r, c);
  if (isClean(go)) {
    const [br, bc] = makeBack(r, c, d);
    if (map[br][bc] === 1) {
      break;
    }

    state = [br, bc, d];
  } else {
    const newd = rotate(d);
    const [newr, newc] = go[newd];

    if (map[newr][newc] === 0 && !clean[newr][newc]) {
      state = [newr, newc, newd];
    } else {
      state = [r, c, newd];
    }
  }
}

console.log(count);
