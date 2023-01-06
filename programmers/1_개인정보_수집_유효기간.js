function solution(today, terms, privacies) {
  const map = {};
  terms.forEach((term) => {
    const [type, month] = term.split(" ");
    map[type] = month * 28;
  });

  const todayNumber = getNumber(today);
  const invalids = [];
  for (let i = 0; i < privacies.length; i += 1) {
    const [day, type] = privacies[i].split(" ");
    if (todayNumber >= getNumber(day) + map[type]) invalids.push(i + 1);
  }

  return invalids.sort((a, b) => a - b);
}

function getNumber(day) {
  const [y, m, d] = day.split(".").map(Number);
  return y * 12 * 28 + m * 28 + d;
}
