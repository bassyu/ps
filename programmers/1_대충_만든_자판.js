function solution(keymap, targets) {
  const getMin = (c) => {
    let min = Infinity;
    keymap.forEach((key) => {
      const index = key.split("").indexOf(c);
      if (index !== -1) min = Math.min(min, index + 1);
    });

    return min === Infinity ? -1 : min;
  };

  const targetMins = targets.map((target) =>
    target.split("").map((c) => getMin(c))
  );
  return targetMins.map(
    (targetMin) =>
      targetMin.includes(-1) ? -1 : targetMin.reduce((acc, cur) => acc + cur),
    0
  );
}
