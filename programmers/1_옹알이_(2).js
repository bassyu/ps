function solution(babbling) {
  let count = 0;
  babbling.forEach((string) => {
    let prev = "start";
    while (true) {
      if (prev !== "aya" && string.slice(0, 3) === "aya") {
        prev = "aya";
        string = string.slice(3);
      } else if (prev !== "ye" && string.slice(0, 2) === "ye") {
        prev = "ye";
        string = string.slice(2);
      } else if (prev !== "woo" && string.slice(0, 3) === "woo") {
        prev = "woo";
        string = string.slice(3);
      } else if (prev !== "ma" && string.slice(0, 2) === "ma") {
        prev = "ma";
        string = string.slice(2);
      } else {
        break;
      }
    }

    count += string.length === 0;
  });

  return count;
}
