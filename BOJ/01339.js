const [N, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const count = {};

input.map((word) => {
  const list = word.split("").reverse();
  for (let i = 0; i < list.length; i += 1) {
    const char = list[i];
    if (!count[char]) count[char] = 0;

    count[char] += 10 ** i;
  }
});

const map = Object.fromEntries(
  Object.entries(count)
    .sort(([, a], [, b]) => b - a)
    .map(([key], index) => [key, 9 - index])
);

console.log(
  input
    .map((word) =>
      Number(
        word
          .split("")
          .map((char) => map[char])
          .join("")
      )
    )
    .reduce((acc, cur) => acc + cur, 0)
);
