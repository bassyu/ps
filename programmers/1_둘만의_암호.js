function solution(s, skip, index) {
  const dict = Array.from("abcdefghijklmnopqrstuvwxyz").filter(
    (c) => !skip.includes(c)
  );
  return s
    .split("")
    .map((c) => dict[(dict.indexOf(c) + index) % dict.length])
    .join("");
}
