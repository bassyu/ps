function solution(clothes) {
  const map = {};
  clothes.forEach(([, clothe]) => {
    if (map[clothe]) {
      map[clothe] += 1;
    } else {
      map[clothe] = 1;
    }
  });

  return Object.values(map).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
