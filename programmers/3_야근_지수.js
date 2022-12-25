function solution(n, works) {
  while (n > 0) {
    let max = 0;
    let index = 0;
    for (let i = 0; i < works.length; i += 1) {
      if (max < works[i]) {
        max = works[i];
        index = i;
      }
    }

    if (max <= 0) break;
    works[index] -= 1;
    n -= 1;
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
