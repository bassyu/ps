const [T, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const output = [];
for (let i = 0; i < Number(T); i += 1) {
  const N = Number(input[i * 2]);
  const ranks = input[i * 2 + 1].split(" ").map(Number);

  const teams = Array(201)
    .fill(null)
    .map(() => []);

  ranks.forEach((team, index) => {
    teams[team].push(index + 1);
  });

  let fails = [];
  teams.forEach((team, index) => {
    if (team.length < 6) {
      fails = fails.concat(team);
      teams[index] = null;
    }
  });

  const teamsPoint = teams.map((team, index) => {
    if (team === null) {
      return [Infinity, Infinity];
    }

    return [
      team
        .map((rank, teamRank) =>
          teamRank < 4 ? rank - fails.filter((fail) => fail < rank).length : 0
        )
        .reduce((acc, cur) => acc + cur, 0),
      team[4],
      index,
    ];
  });

  output.push(
    teamsPoint.sort(([, a], [, b]) => a - b).sort(([a], [b]) => a - b)[0][2]
  );
}

console.log(output.map(String).join("\n"));
