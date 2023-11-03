function solution(arrayA, arrayB) {
  let max = 0;

  arrayA.sort((a, b) => a - b);
  let divA = [];
  for (let i = 2; i <= arrayA[0]; i += 1) {
    if (arrayA.every((a) => a % i === 0)) {
      divA.push(i);
    }
  }

  divA.forEach((i) => {
    if (arrayA.every((a) => a % i === 0) && !arrayB.some((b) => b % i === 0)) {
      max = Math.max(max, i);
    }
  });

  arrayB.sort((a, b) => a - b);
  let divB = [];
  for (let i = 2; i <= arrayB[0]; i += 1) {
    if (arrayB.every((a) => a % i === 0)) {
      divB.push(i);
    }
  }

  divB.forEach((i) => {
    if (arrayB.every((b) => b % i === 0) && !arrayA.some((a) => a % i === 0)) {
      max = Math.max(max, i);
    }
  });

  return max;
}
