function solution(s) {
  let stack = 0;
  for (let c of s) {
    stack += c === "(" ? 1 : -1;
    if (stack <= -1) return false;
  }

  return stack === 0;
}
