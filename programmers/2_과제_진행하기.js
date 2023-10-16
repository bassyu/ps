// 28:59

function solution(plans) {
  const times = {};
  const starts = [];

  plans.forEach(([key, start, time]) => {
    times[key] = Number(time);

    const [h, m] = start.split(":").map(Number);
    starts[h * 60 + m] = key;
  });

  const work = [];
  const done = [];
  for (let i = 0; i < 24 * 60 + 100 * 1000; i += 1) {
    if (starts[i] !== undefined) {
      work.push(starts[i]);
    }

    if (work.length === 0) continue;

    const key = work[work.length - 1];
    times[key] -= 1;

    if (times[key] === 0) {
      done.push(work.pop());
    }
  }

  return done;
}
