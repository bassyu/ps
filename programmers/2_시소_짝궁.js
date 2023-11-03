// 시간 잡아먹은 이유가 값은 1000까지 있는게 맞는데, 없는 짝꿍을 찾을라면 2000까지는 조회를 해본다는 것이다.
// 1000이 2000까지 있나 없나 궁금해 하는 과정에서 null 이 있었고, 이게 섞여서 반환 값이 이상해진거임.
// 즉 콘솔을 찍었으면 해결했을 문제.

function solution(weights) {
  const map = Array(2001).fill(0);

  weights.forEach((weights) => {
    map[weights] += 1;
  });

  let count = 0;
  weights.forEach((weight) => {
    map[weight] -= 1;
    [
      [1, 1],
      [2, 3],
      [2, 4],
      [3, 2],
      [3, 4],
      [4, 2],
      [4, 3],
    ].forEach(([a, b]) => {
      const fr = (weight * a) / b;
      if (fr % 1 === 0) {
        count += map[fr];
      }
    });
  });

  return count;
}
