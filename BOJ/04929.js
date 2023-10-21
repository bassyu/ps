const input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

let i = 0;
const output = [];
while (Number(input[i]) !== 0) {
  const A = input[i].split(" ").slice(1).map(Number);
  const B = input[i + 1].split(" ").slice(1).map(Number);

  let Asum = 0;
  let Bsum = 0;

  let Ai = 0;
  let Bi = 0;

  let sum = 0;
  let Alast = 0;
  let Blast = 0;
  while (A.length > Ai && B.length > Bi) {
    const a = A[Ai];
    const b = B[Bi];

    if (a > b) {
      Bi += 1;
      Bsum += b;
    } else if (a < b) {
      Ai += 1;
      Asum += a;
    } else {
      sum += a + Math.max(Asum, Bsum);
      Ai += 1;
      Bi += 1;
      Alast = Ai;
      Blast = Bi;
      Asum = 0;
      Bsum = 0;
    }
  }

  sum += Math.max(
    A.slice(Alast).reduce((acc, cur) => acc + cur, 0),
    B.slice(Blast).reduce((acc, cur) => acc + cur, 0)
  );

  output.push(sum);

  i += 2;
}

console.log(output.map(String).join("\n"));
