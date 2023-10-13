// 10:00 string[index]에 숫자 할당은 조용한 에러
// 23:00 무한반복

const INPUT = "./input";
const [NM, ...input] = require("fs")
  .readFileSync(INPUT, { encoding: "utf-8" })
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const map = input.map((row) => row.split("").map(Number));

const q = [[0, 0, 1]];
while (q.length) {
  const [Y, X, dist] = q.shift();

  const go = [
    [Y + 1, X],
    [Y - 1, X],
    [Y, X + 1],
    [Y, X - 1],
  ];
  go.forEach(([y, x]) => {
    if (y < 0 || x < 0 || y >= N || x >= M) return;
    if (map[y][x] !== 1) return;
    q.push([y, x, dist + 1]);
    map[y][x] = String(dist + 1);
  });
}

console.log(map[N - 1][M - 1]);
