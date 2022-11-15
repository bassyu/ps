function solution(number) {
  const l = number.length;
  let count = 0;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      for (let k = j + 1; k < l; k++) {
        if (number[i] + number[j] + number[k] === 0) count += 1;
      }
    }
  }

  return count;
}
