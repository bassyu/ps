function solution(s) {
  let answer = "";
  let pre = " ";
  s.toLowerCase()
    .split("")
    .forEach((c) => {
      answer += pre === " " ? c.toUpperCase() : c;
      pre = c;
    });

  return answer;
}
