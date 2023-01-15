function solution(brown, yellow) {
  for (let w = 3; w <= brown / 2; w += 1) {
    for (let h = 3; h <= w; h += 1) {
      if (w * 2 + h * 2 - 4 === brown && (w - 2) * (h - 2) === yellow) {
        return [w, h];
      }
    }
  }
}
