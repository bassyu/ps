function solution(k, score) {
  let honorList = [];
  const announceList = [];
  score.forEach((s) => {
    honorList.push(s);
    honorList.sort((a, b) => b - a);
    honorList = honorList.slice(0, k);
    announceList.push(honorList[honorList.length - 1]);
  });

  return announceList;
}
