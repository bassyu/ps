function solution(word) {
  let count = -1;
  let answer = 0;
  const dfs = (string) => {
    count += 1;
    if (string === word) answer = count;
    if (string.length === 5) return;
    [..."AEIOU"].forEach((vowel) => {
      dfs(string + vowel);
    });
  };

  dfs("");
  return answer;
}
