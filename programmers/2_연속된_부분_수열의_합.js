function solution(sequence, k) {
  let sum = sequence[0];
  let [left, right] = [0, 0];
  const able = [];
  while (right < sequence.length) {
    if (sum === k) able.push([left, right]);

    if (sum < k) {
      right += 1;
      sum += sequence[right];
    } else {
      left += 1;
      sum -= left ? sequence[left - 1] : 0;
    }
  }

  able.sort(([ai, aj], [bi, bj]) => aj - ai - (bj - bi));

  return able[0];
}
