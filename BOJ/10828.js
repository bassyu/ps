const INPUT = "./input";
const [T, ...inputs] = require("fs")
  .readFileSync(INPUT, "utf-8")
  .trim()
  .split("\n");

const stack = [];
const output = [];
inputs.forEach((input) => {
  const [method, number] = input.split(" ");

  switch (method) {
    case "push":
      stack.push(number);
      break;
    case "top":
      output.push(stack.length ? stack[stack.length - 1] : -1);
      break;
    case "empty":
      output.push(stack.length === 0 ? 1 : 0);
      break;
    case "size":
      output.push(stack.length);
      break;
    case "pop":
      if (stack.length) {
        output.push(stack.pop());
      } else {
        output.push(-1);
      }
  }
});

console.log(output.join("\n"));
