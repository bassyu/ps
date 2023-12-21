// 28:07

const [N, input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const list = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let count = 0;
for (let i = 0; i < list.length; i += 1) {
  const number = list[i];
  const search = [...list.slice(0, i), ...list.slice(i + 1)];
  let able = false;

  for (let j = 0; j < search.length; j += 1) {
    if (able) break;

    const a = search[j];

    let left = j + 1;
    let right = search.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      const b = search[mid];
      if (a + b === number) {
        able = true;
        break;
      } else if (a + b < number) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  if (able) count += 1;
}

console.log(count);
