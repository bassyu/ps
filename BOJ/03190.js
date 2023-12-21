// 01:20:08

const [N, K, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const n = Number(N);
const k = Number(K);
const apples = input.slice(0, k);
const orders = input.slice(k + 1);

const map = Array(n)
  .fill(null)
  .map(() => Array(n).fill(0));

apples.forEach((row) => {
  const [y, x] = row.split(" ").map(Number);
  map[y - 1][x - 1] = "apple";
});

const order = [];
orders.forEach((row) => {
  const [X, C] = row.split(" ");
  order[X] = C;
});

let direction = "right";
let second = 0;
let tail = 0;
let snake = [[0, 0]];
while (true) {
  if (order[second] === "D") {
    direction = {
      right: "down",
      down: "left",
      left: "up",
      up: "right",
    }[direction];
  } else if (order[second] === "L") {
    direction = {
      right: "up",
      up: "left",
      left: "down",
      down: "right",
    }[direction];
  }

  const [y, x] = snake[snake.length - 1];
  const head = {
    right: [y, x + 1],
    left: [y, x - 1],
    up: [y - 1, x],
    down: [y + 1, x],
  }[direction];
  const [headY, headX] = head;

  const outOfRange = headY < 0 || headY >= n || headX < 0 || headX >= n;
  if (
    outOfRange ||
    snake.slice(tail).some(([y, x]) => headY === y && headX === x)
  ) {
    console.log(second + 1);
    return;
  }

  snake.push(head);
  if (map[headY][headX] === "apple") {
    map[headY][headX] = 0;
  } else {
    tail += 1;
  }

  second += 1;
}
