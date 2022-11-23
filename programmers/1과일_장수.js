function solution(k, m, score) {
  let box = [];
  let profit = 0;
  score
    .sort((a, b) => b - a)
    .forEach((i) => {
      box.push(i);
      if (box.length === m) {
        profit += i * m;
        box = [];
      }
    });

  return profit;
}
