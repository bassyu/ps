const input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf-8")
  .trim()
  .split("\n");

const map = [
  ["###", "#.#", "#.#", "#.#", "###"],
  ["..#", "..#", "..#", "..#", "..#"],
  ["###", "..#", "###", "#..", "###"],
  ["###", "..#", "###", "..#", "###"],
  ["#.#", "#.#", "###", "..#", "..#"],
  ["###", "#..", "###", "..#", "###"],
  ["###", "#..", "###", "#.#", "###"],
  ["###", "..#", "..#", "..#", "..#"],
  ["###", "#.#", "###", "#.#", "###"],
  ["###", "#.#", "###", "..#", "###"],
];

const watch = new Array(4).fill(null).map(() => []);
for (let i = 0; i < 5; i += 1) {
  const row = input[i];
  for (let j = 0; j < 4; j += 1) {
    watch[j].push(row.slice(j * 4, j * 4 + 3));
  }
}

const result = [];
watch.forEach((number) => {
  for (let m = 0; m < 10; m += 1) {
    const mapNumber = map[m];
    let able = true;
    for (let y = 0; y < 5; y += 1) {
      for (let x = 0; x < 3; x += 1) {
        if (number[y][x] === "#" && mapNumber[y][x] === ".") {
          able = false;
        }
      }
    }

    if (able) {
      result.push(m);
      break;
    }
  }
});

console.log(`${result[0]}${result[1]}:${result[2]}${result[3]}`);
