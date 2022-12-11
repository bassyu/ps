function solution(k, tangerine) {
  const counts = new Array(10000001).fill(0);
  tangerine.forEach((tangerin) => {
    counts[tangerin] += 1;
  });

  counts.sort((a, b) => b - a);
  let kind = 0;
  let acc = 0;
  while (acc < k) {
    acc += counts[kind];
    kind += 1;
  }

  return kind;
}
