// 37:32

const [T, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const print = [];
for (let i = 0; i < T; i += 1) {
  const N = Number(input[i * 2]);
  let pig = input[i * 2 + 1].split(" ").map(Number);

  let count = 1;

  while (true) {
    if (pig.reduce((acc, cur) => acc + cur, 0) > N) {
      break;
    }

    const newPig = [];
    for (let p = 0; p < 6; p += 1) {
      newPig.push(
        [5, 0, 1, 2, 3, 4, 5, 0]
          .slice(p, 3 + p)
          .reduce((acc, cur) => acc + pig[cur], pig[(p + 3) % 6])
      );
    }

    pig = newPig;
    count += 1;
  }

  print.push(String(count));
}

console.log(print.join("\n"));
