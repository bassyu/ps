const INPUT = "./input";
const [string, M, ...inputs] = require("fs")
  .readFileSync(INPUT, "utf-8")
  .trim()
  .split("\n");

const left = string.split("");
const right = [];

inputs.forEach((input) => {
  const [method, char] = input.split(" ");

  switch (method) {
    case "L":
      if (left.length) right.push(left.pop());
      break;
    case "D":
      if (right.length) left.push(right.pop());
      break;
    case "B":
      if (left.length) left.pop();
      break;
    case "P":
      left.push(char);
      break;
  }
});

console.log(left.join("") + right.reverse().join(""));
