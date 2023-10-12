const INPUT = "./input";
const [T, ...AB] = require("fs")
  .readFileSync(INPUT, "utf-8")
  .trim()
  .split("\n");

AB.forEach((ab) => {
  const [a, b] = ab.split(" ").map(Number);
  console.log(a + b);
});
