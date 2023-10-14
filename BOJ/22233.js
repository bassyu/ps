const INPUT = "./input";
const [NM, ...input] = require("fs")
  .readFileSync(INPUT, "utf-8")
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const memos = new Set(input.slice(0, N));
const blogs = input.slice(N, N + M);

const results = [];
blogs.map((blog) => {
  blog.split(",").map((key) => {
    memos.delete(key);
  });

  results.push(String(memos.size));
});

console.log(results.join("\n"));
