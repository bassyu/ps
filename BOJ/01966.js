const INPUT = "./input";
const [T, ...input] = require("fs")
  .readFileSync(INPUT, "utf-8")
  .trim()
  .split("\n");

for (let i = 0; i < T; i += 1) {
  const index = i * 2;
  const [N, M] = input[index].split(" ").map(Number);
  const q = input[index + 1]
    .split(" ")
    .map((num, index) => [Number(num), index]);

  let count = 1;
  while (q.length) {
    const print = q.shift();
    if (print[0] < Math.max(...q.map(([num]) => num))) {
      q.push(print);
    } else if (print[1] === M) {
      console.log(count);
      break;
    } else {
      count += 1;
    }
  }
}
