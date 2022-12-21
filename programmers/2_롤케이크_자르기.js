function solution(topping) {
  const lSet = new Set();
  const rSet = new Set();
  const lCounts = [];
  const rCounts = [];
  for (let i = 0; i < topping.length; i += 1) {
    lSet.add(topping[i]);
    rSet.add(topping[topping.length - 1 - i]);
    lCounts.push(lSet.size);
    rCounts.push(rSet.size);
  }

  let count = 0;
  for (let i = 0; i < topping.length - 1; i += 1) {
    count += lCounts[i] === rCounts[rCounts.length - 2 - i];
  }

  return count;
}
