const [TN, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const [T, N] = TN.split(" ").map(Number);

const map = Array(N + 1)
  .fill(null)
  .map(() => {});

const log = [];
const bad = new Set([]);
for (let i = 1; i < N + 1; i += 1) {
  map[i] = {
    location: 1,
    farm: Array(54).fill(0),
  };
}

input.forEach((row) => {
  const [n, p, method, params, params2] = row.split(" ");
  const number = Number(n);
  const player = Number(p);

  switch (method) {
    case "M":
      map[player].location = Number(params);
      break;
    case "F":
      const item = Number(params);
      if (map[player].location !== item) {
        log.push(number);
      }

      map[player].farm[item] += 1;
      break;
    case "C":
      const a = Number(params);
      const b = Number(params2);
      if (!map[player].farm[a] || !map[player].farm[b]) {
        log.push(number);
      }
      if (map[player].farm[a]) {
        map[player].farm[a] -= 1;
      }
      if (map[player].farm[b]) {
        map[player].farm[b] -= 1;
      }
      break;
    case "A":
      const target = Number(params);
      if (map[target]?.location !== map[player].location) {
        log.push(number);
        bad.add(player);
      }
      break;
  }
});

console.log(log.length);
if (log.length) {
  console.log(
    log
      .sort((a, b) => a - b)
      .map(String)
      .join(" ")
  );
}
console.log(bad.size);
if (bad.size) {
  console.log(
    Array.from(bad)
      .sort((a, b) => a - b)
      .map(String)
      .join(" ")
  );
}
