function solution(order) {
  order.reverse();
  const boxs = Array(order.length)
    .fill()
    .map((_, i) => i + 1)
    .reverse();
  const stack = [];

  let count = 0;
  while (
    boxs.length ||
    (order[order.length - 1] &&
      order[order.length - 1] === stack[stack.length - 1])
  ) {
    if (order[order.length - 1] === boxs[boxs.length - 1]) {
      order.pop();
      boxs.pop();
      count += 1;
    } else if (order[order.length - 1] === stack[stack.length - 1]) {
      order.pop();
      stack.pop();
      count += 1;
    } else {
      stack.push(boxs.pop());
    }
  }

  return count;
}
