function solution(dirs) {
  let x = 0;
  let y = 0;
  const log = new Set();

  dirs.split("").forEach((dir) => {
    const start = String(x) + String(y);
    const isAble = (x, y) => x >= -5 && x <= 5 && y >= -5 && y <= 5;
    if (dir === "U") {
      y += isAble(x, y + 1);
    } else if (dir === "D") {
      y -= isAble(x, y - 1);
    } else if (dir === "R") {
      x += isAble(x + 1, y);
    } else {
      x -= isAble(x - 1, y);
    }

    const end = String(x) + String(y);
    if (start !== end) log.add([start, end].sort().join());
  });

  return log.size;
}
