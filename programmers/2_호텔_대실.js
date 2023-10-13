// 25:26
function solution(book_time) {
  const history = Array(25 * 60).fill(0);

  book_time.forEach(([start, end]) => {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);

    history[sh * 60 + sm] += 1;
    history[eh * 60 + em + 10] += -1;
  });

  let max = 0;
  for (let i = 1; i < history.length; i += 1) {
    history[i] += history[i - 1];
    max = Math.max(max, history[i]);
  }

  return max;
}
