// 09:11

const [N, input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const list = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let min = Infinity;
let result = "";
for (let i = 0; i < list.length; i += 1) {
  let left = i + 1;
  let right = list.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const mix = list[i] + list[mid];

    if (Math.abs(mix) < min) {
      min = Math.abs(mix);
      result = `${list[i]} ${list[mid]}`;
    }

    if (mix < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

console.log(result);
