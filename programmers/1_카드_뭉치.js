function solution(cards1, cards2, goal) {
  let result = "Yes";
  cards1.reverse();
  cards2.reverse();
  goal.forEach((word) => {
    if (word === cards1[cards1.length - 1]) {
      cards1.pop();
    } else if (word === cards2[cards2.length - 1]) {
      cards2.pop();
    } else {
      result = "No";
    }
  });

  return result;
}
