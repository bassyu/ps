function solution(s) {
  const sorted = s.split(" ").sort((a, b) => a - b);
  return sorted[0] + " " + sorted.pop();
}
