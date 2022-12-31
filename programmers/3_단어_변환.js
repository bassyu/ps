function solution(begin, target, words) {
  const isLink = (a, b) => {
    let diff = 0;
    for (let i = 0; i < a.length; i += 1) diff += a[i] !== b[i];
    return diff === 1;
  };

  const graph = {};
  [begin, ...words].forEach((a) => {
    graph[a] = words.filter((b) => isLink(a, b));
  });

  const q = [[begin, 0]];
  const visited = new Set([begin]);
  while (q.length !== 0) {
    const [word, depth] = q.pop();
    if (word === target) return depth;
    graph[word].forEach((go) => {
      if (visited.has(go)) return;
      q.unshift([go, depth + 1]);
      visited.add(go);
    });
  }

  return 0;
}
