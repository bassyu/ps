function solution(my_string, n) {
  let answer = "";
  my_string.split("").forEach((c) => {
    answer += c.repeat(n);
  });
  return answer;
}
