function solution(routes) {
  routes.sort((a, b) => b[1] - a[1]);
  let count = 0;
  while (routes.length > 0) {
    count += 1;
    const end = routes.pop()[1];
    routes = routes
      .filter((route) => route[0] > end)
      .sort((a, b) => b[1] - a[1]);
  }

  return count;
}
