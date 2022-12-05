function solution(s) {
  let answer = 0;
  let x = "";
  let xCount = 0;
  let yCount = 0;
  s.split("").forEach((c) => {
    if (xCount === 0 && yCount === 0) x = c;

    if (c === x) xCount += 1;
    else yCount += 1;

    if (xCount === yCount) {
      answer += 1;
      xCount = 0;
      yCount = 0;
    }
  });

  return answer + (xCount + yCount !== 0);
}
