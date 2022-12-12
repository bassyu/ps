function solution(s) {
  const previous = {};
  const answer = [];
  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    answer.push(previous[c] === undefined ? -1 : i - previous[c]);
    previous[c] = i;
  }

  return answer;
}
