// 54:57

const [INK, colors, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf-8")
  .trim()
  .split("\n");

const [I, N, K] = INK.split(" ").map(Number);

const commands = input.pop();
const map = input.map((row) => row.split(""));

let jumpCount = 0;
let ink = 0;
let r;
let c;

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (map[i][j] === "@") {
      r = i;
      c = j;
    }
  }
}

commands.split("").forEach((command) => {
  if (command === "j") {
    ink += 1;
  } else if (command === "J") {
    for (let y = 0; y < N; y += 1) {
      for (let x = 0; x < N; x += 1) {
        if (
          Math.abs(y - r) + Math.abs(x - c) <= ink &&
          map[y][x] !== "." &&
          map[y][x] !== "@"
        ) {
          map[y][x] = colors[jumpCount];
        }
      }
    }

    ink = 0;
    jumpCount = (jumpCount + 1) % I;
  } else {
    map[r][c] = ".";
    if (command === "D") {
      r += 1;
      if (r >= N || map[r][c] !== ".") {
        r -= 1;
      }
    } else if (command === "U") {
      r -= 1;
      if (r < 0 || map[r][c] !== ".") {
        r += 1;
      }
    } else if (command === "L") {
      c -= 1;
      if (c < 0 || map[r][c] !== ".") {
        c += 1;
      }
    } else if (command === "R") {
      c += 1;
      if (c >= N || map[r][c] !== ".") {
        c -= 1;
      }
    }
    map[r][c] = "@";
  }
});

console.log(map.map((row) => row.join("")).join("\n"));
