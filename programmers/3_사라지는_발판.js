function move(turn, map, a, b, depth) {
  const [y, x] = turn === "a" ? a : b;
  if (map[y][x] === 0) {
    return ["lose", depth];
  }

  let max = depth;
  let min = Infinity;

  [
    [y + 1, x],
    [y - 1, x],
    [y, x + 1],
    [y, x - 1],
  ].forEach(([Y, X]) => {
    if (Y < 0 || X < 0 || Y >= map.length || X >= map[0].length) return;
    if (map[Y][X] === 0) return;

    const newMap = map.map((row) => row.slice());
    newMap[y][x] = 0;

    const [result, count] =
      turn === "a"
        ? move("b", newMap, [Y, X], b, depth + 1)
        : move("a", newMap, a, [Y, X], depth + 1);

    if (result === "lose") {
      min = Math.min(min, count);
    } else {
      max = Math.max(max, count);
    }
  });

  return min === Infinity ? ["lose", max] : ["win", min];
}

function solution(board, aloc, bloc) {
  return move("a", board, aloc, bloc, 0)[1];
}
