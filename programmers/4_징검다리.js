// 55:25
// 거리의 최소값을 정해두고, 이 거리를 초과하는 바위가 몇개인지 계산

function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
  const memo = [rocks[0]];
  for (let i = 1; i < rocks.length; i += 1) {
    memo.push(rocks[i] - rocks[i - 1]);
  }

  memo.push(distance - rocks[rocks.length - 1]);

  let max = 0;
  let left = 0;
  let right = 1000000000;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let remove = 0;
    const temp = memo.slice();
    for (let i = 0; i < temp.length; i += 1) {
      if (temp[i] < mid) {
        remove += 1;
        temp[i + 1] += temp[i];
      }
    }

    if (remove <= n) {
      max = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return max;
}
