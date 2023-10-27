function solution(fees, records) {
  const [dt, dp, ut, up] = fees;

  const park = [];
  const use = [];
  records.forEach((record) => {
    const [t, k, method] = record.split(" ");
    const [h, m] = t.split(":").map(Number);
    const time = h * 60 + m;
    const key = Number(k);

    if (use[key] === undefined) {
      use[key] = 0;
    }

    if (method === "IN") {
      park[key] = time;
    } else {
      use[key] += time - park[key];
      park[key] = 23 * 60 + 59;
    }
  });

  park.forEach((value, key) => {
    use[key] += 23 * 60 + 59 - park[key];
  });

  const price = {};
  use.forEach((value, key) => {
    price[key] = dp;

    if (value > dt) {
      price[key] += Math.ceil((value - dt) / ut) * up;
    }
  });

  return Object.entries(price)
    .sort(([ka, va], [kb, vb]) => ka - kb)
    .map(([k, v]) => v);
}
