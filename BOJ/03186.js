const [KLN, input] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const [k, l, n] = KLN.split(" ").map(Number);

let stand = 0;
let no = 0;
let on = false;
let lastOn = 0;
let time = 0;
const result = [];

input.split("").forEach((now) => {
  time += 1;

  if (now === "1") {
    stand += 1;
    no = 0;
  } else {
    stand = 0;
    no += 1;
  }

  if (stand === k) {
    on = true;
  }

  if (on) {
    lastOn = time;
  }

  if (on && no === l) {
    result.push(time);
    on = false;
  }
});

if (on) {
  result.push(lastOn + l);
}

if (result.length) {
  console.log(result.map(String).join("\n"));
} else {
  console.log("NIKAD");
}
