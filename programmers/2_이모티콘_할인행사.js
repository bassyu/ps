// 37:36

function solution(users, emoticons) {
  const sale = [10, 20, 30, 40];
  const combis = [];
  const pws = (combi) => {
    if (combi.length === emoticons.length) {
      combis.push(combi);
      return;
    }

    for (let i = 0; i < 4; i += 1) {
      const price = emoticons[combi.length];
      pws([...combi, [price - (price * sale[i]) / 100, sale[i]]]);
    }
  };

  pws([]);

  const results = [];
  combis.forEach((combi) => {
    let totalUser = 0;
    let totalBuy = 0;
    users.map(([want, money]) => {
      const buy = combi.reduce(
        (acc, [price, sale]) => acc + (sale >= want ? price : 0),
        0
      );
      if (buy >= money) {
        totalUser += 1;
      } else {
        totalBuy += buy;
      }
    });

    results.push([totalUser, totalBuy]);
  });

  return results.sort((a, b) => b[1] - a[1]).sort((a, b) => b[0] - a[0])[0];
}
