function solution(survey, choices) {
  const RT = [0, 0];
  const CF = [0, 0];
  const JM = [0, 0];
  const AN = [0, 0];

  for (let i = 0; i < survey.length; i += 1) {
    const s = survey[i];
    const c = choices[i];

    switch (s) {
      case "RT":
        if (c > 4) {
          RT[1] += c - 4;
        } else {
          RT[0] += 4 - c;
        }
        break;

      case "TR":
        if (c > 4) {
          RT[0] += c - 4;
        } else {
          RT[1] += 4 - c;
        }
        break;

      case "CF":
        if (c > 4) {
          CF[1] += c - 4;
        } else {
          CF[0] += 4 - c;
        }
        break;

      case "FC":
        if (c > 4) {
          CF[0] += c - 4;
        } else {
          CF[1] += 4 - c;
        }
        break;

      case "JM":
        if (c > 4) {
          JM[1] += c - 4;
        } else {
          JM[0] += 4 - c;
        }
        break;

      case "MJ":
        if (c > 4) {
          JM[0] += c - 4;
        } else {
          JM[1] += 4 - c;
        }
        break;

      case "AN":
        if (c > 4) {
          AN[1] += c - 4;
        } else {
          AN[0] += 4 - c;
        }
        break;

      case "NA":
        if (c > 4) {
          AN[0] += c - 4;
        } else {
          AN[1] += 4 - c;
        }
        break;
    }
  }

  return `${RT[0] < RT[1] ? "T" : "R"}${CF[0] < CF[1] ? "F" : "C"}${
    JM[0] < JM[1] ? "M" : "J"
  }${AN[0] < AN[1] ? "N" : "A"}`;
}
