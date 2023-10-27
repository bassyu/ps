// 47:00 런타임 에러
// isNaN 문제 -> 1 2 이런식으로 숫자만 올 수 있음, 숫자인이 아닌지가 아니라 값의 개수로 판단해야함
// 결국 입력의 타입을 잘 봐야함

// 57:12

function solution(commands) {
  const map = Array(51)
    .fill(null)
    .map(() => Array(51).fill(null));

  const link = Array(51)
    .fill(null)
    .map(() =>
      Array(51)
        .fill(null)
        .map(() => [])
    );

  const update = (r, c, value) => {
    const stack = [[r, c]];
    const visited = new Set([`${r} ${c}`]);
    while (stack.length) {
      const [r, c] = stack.pop();
      map[r][c] = value;

      link[r][c].forEach(([R, C]) => {
        const key = `${R} ${C}`;
        if (visited.has(key)) return;
        visited.add(key);
        stack.push([R, C]);
      });
    }
  };

  const updateAll = (value1, value2) => {
    for (let r = 0; r < 51; r += 1) {
      for (let c = 0; c < 51; c += 1) {
        if (map[r][c] === value1) {
          map[r][c] = value2;
        }
      }
    }
  };

  const unmerge = (ir, ic) => {
    const stack = [[ir, ic]];
    const visited = new Set([`${ir} ${ic}`]);
    const value = map[ir][ic];
    while (stack.length) {
      const [r, c] = stack.pop();

      link[r][c].forEach(([R, C]) => {
        const key = `${R} ${C}`;
        if (visited.has(key)) return;

        visited.add(key);
        stack.push([R, C]);
      });

      map[r][c] = null;
      link[r][c] = [];
    }

    map[ir][ic] = value;
  };

  const print = [];
  commands.forEach((command) => {
    const [key, ...params] = command.split(" ");

    if (key === "UPDATE") {
      if (params.length === 2) {
        updateAll(params[0], params[1]);
      } else {
        update(Number(params[0]), Number(params[1]), params[2]);
      }
    } else if (key === "MERGE") {
      const [r1, c1, r2, c2] = params.map(Number);
      if (r1 === r2 && c1 === c2) return;

      link[r1][c1].push([r2, c2]);
      link[r2][c2].push([r1, c1]);

      if (map[r1][c1] === null && map[r2][c2] !== null) {
        update(r1, c1, map[r2][c2]);
      } else {
        update(r1, c1, map[r1][c1]);
      }
    } else if (key === "UNMERGE") {
      const [r, c] = params.map(Number);
      unmerge(r, c);
    } else if (key === "PRINT") {
      const [r, c] = params.map(Number);
      print.push(map[r][c] === null ? "EMPTY" : map[r][c]);
    }
  });

  return print;
}
