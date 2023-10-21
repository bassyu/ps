const [NMP, pInput, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const [N, M, P] = NMP.split(" ").map(Number);

const problems = Array(N)
  .fill(null)
  .map(() => ({}));

for (let i = 0; i < input.length; i += 1) {
  const [p, t, player, result] = input[i].split(" ");
  const problem = Number(p) - 1;
  const [h, m] = t.split(":").map(Number);
  const time = h * 60 + m;

  if (!problems[problem][player]) {
    if (result === "wrong") {
      problems[problem][player] = [result, time];
    } else if (result === "solve") {
      problems[problem][player] = ["bad", time];
    }
  } else {
    if (problems[problem][player][0] === "wrong" && result === "solve") {
      problems[problem][player] = [result, time - problems[problem][player][1]];
    }
  }
}

const players = {};
pInput.split(" ").forEach((player) => {
  players[player] = (M + 1) * N;
});

problems.forEach((problem) => {
  const solves = [];
  const tries = [];
  Object.entries(problem).forEach(([player, [result, time]]) => {
    if (result === "solve") {
      solves.push([player, time]);
    } else if (result === "wrong") {
      tries.push(player);
    }
  });

  solves
    .sort(([a], [b]) => (a > b ? 1 : -1))
    .sort(([, a], [, b]) => a - b)
    .forEach(([player], index) => {
      players[player] -= M - index;
    });
  tries.forEach((player) => {
    players[player] -= 1;
  });
});

console.log(
  Object.entries(players)
    .sort(([a], [b]) => (a > b ? 1 : -1))
    .sort(([, a], [, b]) => a - b)
    .map(([player]) => player)
    .join("\n")
);
