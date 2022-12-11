function solution(elements) {
  const circle = elements.concat(elements);
  const set = new Set();
  for (let length = 1; length <= elements.length; length += 1) {
    for (let i = 0; i < elements.length; i += 1) {
      const sum = circle.slice(i, i + length).reduce((acc, cur) => acc + cur);
      set.add(sum);
    }
  }

  return set.size;
}
