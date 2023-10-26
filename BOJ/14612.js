const [NM, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);

let stack = [];
input.map((row) => {
  const [method, a, b] = row.split(" ");

  if (method === "order") {
    stack.push([Number(a), Number(b)]);
  } else if (method === "sort") {
    stack.sort(([oa], [ob]) => oa - ob).sort(([, ta], [, tb]) => ta - tb);
  } else {
    stack = stack.filter(([order]) => order !== Number(a));
  }

  console.log(
    stack.length === 0 ? "sleep" : stack.map(([order]) => order).join(" ")
  );
});
