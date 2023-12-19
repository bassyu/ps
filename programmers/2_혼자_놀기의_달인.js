// 30:31

function solution(cards) {
  const counts = [];
  const visited = Array(cards.length).fill(false);

  for (let node = 0; node < cards.length; node += 1) {
    if (visited[node]) continue;

    let count = 0;
    while (!visited[node]) {
      count += 1;
      visited[node] = true;
      node = cards[node] - 1;
    }

    counts.push(count);
  }

  counts.sort((a, b) => b - a);

  return counts.length === 1 ? 0 : counts[0] * counts[1];
}
