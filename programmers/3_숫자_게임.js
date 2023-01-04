function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let a = 0;
  let b = 0;
  let count = 0;
  while (b < B.length) {
    if (B[b] > A[a]) {
      a += 1;
      count += 1;
    }

    b += 1;
  }

  return count;
}
