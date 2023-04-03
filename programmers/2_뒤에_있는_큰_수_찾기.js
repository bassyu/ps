function solution(numbers) {
  const result = Array(numbers.length).fill(-1);

  let max = 0;
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    if (numbers[i] >= max) {
      max = numbers[i];
      continue;
    }

    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] < numbers[j]) {
        result[i] = numbers[j];
        break;
      } else if (numbers[i] === numbers[j]) {
        result[i] = result[j];
        break;
      }
    }
  }

  return result;
}
