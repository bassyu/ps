function solution(park, routes) {
  let R = null;
  let C = null;
  for (let r = 0; r < park.length; r += 1) {
    if (R) break;
    for (let c = 0; c < park[0].length; c += 1) {
      if (park[r][c] === "S") {
        R = r;
        C = c;
        break;
      }
    }
  }

  const opMap = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };
  const opns = routes.map((route) => route.split(" "));
  while (opns.length > 0) {
    let [op, n] = opns.shift();
    let go = true;
    let tR = R;
    let tC = C;
    while (n > 0) {
      const [r, c] = opMap[op];
      tR += r;
      tC += c;
      n -= 1;
      if (
        tR < 0 ||
        tR >= park.length ||
        tC < 0 ||
        tC >= park[0].length ||
        park[tR][tC] === "X"
      )
        go = false;
    }

    if (!go) continue;
    R = tR;
    C = tC;
  }

  return [R, C];
}
