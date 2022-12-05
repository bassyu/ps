function solution(number, limit, power) {
  let result = 0;
  for (let n = 1; n <= number; n++) {
    result += getDivisorCount(n, limit, power);
  }

  return result;
}

function getDivisorCount(n, limit, power) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count += n === i * i ? 1 : 2;
    }

    if (count > limit) return power;
  }

  return count;
}
