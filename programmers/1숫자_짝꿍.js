function solution(X, Y) {
  const xCount = createCount(X);
  const yCount = createCount(Y);
  let answer = "";
  for (let number = 9; number >= 0; number--) {
    const x = xCount[number];
    const y = yCount[number];
    if (x == 0 || y == 0) continue;

    answer += number.toString().repeat(Math.min(x, y));
  }

  if (answer === "") return "-1";
  if (answer == 0) return "0";
  return answer;
}

function createCount(string) {
  const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  string.split("").forEach((character) => {
    count[Number(character)] += 1;
  });

  return count;
}
