function solution(arr1, arr2) {
  const arr3 = [];
  for (let y = 0; y < arr1.length; y += 1) {
    const row = [];
    for (let x = 0; x < arr2[0].length; x += 1) {
      let number = 0;
      for (let i = 0; i < arr2.length; i += 1) {
        number += arr1[y][i] * arr2[i][x];
      }

      row.push(number);
    }

    arr3.push(row);
  }

  return arr3;
}
