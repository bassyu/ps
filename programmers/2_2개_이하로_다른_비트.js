function solution(numbers) {
  return numbers.map(getMin);
}

function getMin(number) {
  if (number % 2 === 0) {
    return number + 1;
  }

  const a = getBit(number);
  const b = getBit(number + 1);
  let count = 0;
  for (let i = 0; i < 50; i += 1) {
    count += a[i] !== b[i];
  }

  return number + 2 ** (count - 2);
}

function getBit(number) {
  return number.toString(2).padStart(50, "0");
}
