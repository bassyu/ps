function solution(food) {
  let string = "";
  for (let i = 1; i < food.length; i++) {
    string += i.toString().repeat(parseInt(food[i] / 2));
  }

  return string + "0" + string.split("").reverse().join("");
}
