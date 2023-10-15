const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input", "utf-8")
  .trim()
  .split("\n");

const [N, input] = INPUT;
const n = Number(N);
const A = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const lowerBound = (left, right, target) => {
  let index = right + 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (A[mid] < target) {
      left = mid + 1;
    } else {
      index = Math.min(index, mid);
      right = mid - 1;
    }
  }

  return index;
};

const upperBound = (left, right, target) => {
  let index = right + 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (A[mid] <= target) {
      left = mid + 1;
    } else {
      index = Math.min(index, mid);
      right = mid - 1;
    }
  }

  return index;
};

let count = 0;
for (let i = 0; i < n - 2; i += 1) {
  for (let j = i + 1; j < n - 1; j += 1) {
    const start = lowerBound(j + 1, n - 1, -(A[i] + A[j]));
    const end = upperBound(j + 1, n - 1, -(A[i] + A[j]));

    count += end - start;
  }
}

console.log(count);
