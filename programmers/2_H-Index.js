function solution(citations) {
  for (let h = 1000; h >= 0; h -= 1) {
    const count = citations.filter((citation) => citation >= h).length;
    if (count >= h && citations.length - count <= h) return h;
  }
}
