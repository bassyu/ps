function solution(ingredient) {
  const stack = [];
  let count = 0;
  ingredient.forEach((i) => {
    if (i === 1 && stack.slice(-3).toString() === [1, 2, 3].toString()) {
      count += 1;
      stack.pop();
      stack.pop();
      stack.pop();
    } else {
      stack.push(i);
    }
  });

  return count;
}
