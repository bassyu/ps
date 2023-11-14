function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => b[0] - a[0]).sort((a, b) => a[col - 1] - b[col - 1]);

  let result = 0;
  for (let i = row_begin; i <= row_end; i += 1) {
    result ^= data[i - 1].reduce((acc, cur) => acc + (cur % i), 0);
  }

  return result;
}
