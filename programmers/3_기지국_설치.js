function solution(n, stations, w) {
  const range = 1 + w * 2;
  let last = 1;
  let count = 0;
  stations.push(n + w + 1);
  stations.forEach((current) => {
    count += Math.ceil((current - last - w) / range);
    last = current + w + 1;
  });

  return count;
}
