function solution(name, yearning, photo) {
  const map = {};
  name.forEach((n, i) => {
    map[n] = yearning[i];
  });

  return photo.map((p) => p.reduce((acc, name) => acc + (map[name] ?? 0), 0));
}
