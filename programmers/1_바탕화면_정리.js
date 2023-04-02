function solution(wallpaper) {
  let [minY, minX] = [52, 52];
  let [maxY, maxX] = [0, 0];
  for (let y = 0; y < wallpaper.length; y += 1) {
    for (let x = 0; x < wallpaper[0].length; x += 1) {
      if (wallpaper[y][x] === "#") {
        minY = Math.min(minY, y);
        minX = Math.min(minX, x);
        maxY = Math.max(maxY, y + 1);
        maxX = Math.max(maxX, x + 1);
      }
    }
  }

  return [minY, minX, maxY, maxX];
}
