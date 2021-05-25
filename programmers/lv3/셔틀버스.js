function time(n, add) {
  let number = String(n);
  number = number.replace(/[^0-9]/g, "");
  if (add) {
    if (add < 60) numbser = String(Number(number) + Number(add));
    else {
      let divided = add / 60;
      let tempN = Number(number);
      tempN += divided * 100;
      tempN += add % 60;
      number = String(tempN);
    }
  }
  number = number.split("").map((x) => +x);

  if (number[number.length - 2] >= 6) {
    number[number.length - 2] -= 6;
    number[number.length - 3]++;
  }
  return Number(number.join(""));
}

function solution(n, t, m, timetable) {
  var answer = "";
  timetable = timetable.map((x) => time(x));
  let bus = Array(n)
    .fill(0)
    .map((x, i) => [time(900, t * i)]);
  timetable.sort((a, b) => a - b);
  console.log(timetable, bus);
  for (let i = 0; i < n; i++) {
    while (1) {
      //끝까지 갔거나 그것보다 작은게 나오면 브레이크
      if (
        bus[i].length === m + 1 ||
        bus[i][0] < timetable[0] ||
        timetable.length === 0
      )
        break;
      //들어갈수있어
      if (bus[i][0] >= timetable[0]) {
        bus[i].push(timetable.shift());
      }
    }
  }
  console.log(bus);
  for (let i = n - 1; i >= 0; i--) {
    if (bus[i].length !== m + 1) {
      if (i === bus.length - 1) {
        console.log(bus[i][0], bus[i][bus[i].length - 1]);
        answer = time(Math.max(bus[i][0], bus[i][bus[i].length - 1]));
        break;
      } else {
        answer = time(
          Math.max(bus[i][0], bus[i][bus[i].length - 1], bus[i + 1][1])
        );
        break;
      }
    }
  }
  console.log(answer);
  if (answer === "") {
    console.log(bus[0][1]);
    if (String(bus[0][1]).slice(-2) === "00") {
      answer = String(bus[0][1]).padStart(4, "0");
      let h = Number(answer.slice(0, 2)) - 1;
      let m = 59;
      answer = 
    } else answer = time(bus[0][1] - 1);
  }
  answer = String(answer).padStart(4, "0");
  if (answer.length === 3) return answer.slice(0, 1) + ":" + answer.slice(1, 3);
  else return answer.slice(0, 2) + ":" + answer.slice(2, 4);
}
// console.log(
//   solution(10, 60, 45, [
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//     "23:59",
//   ])
// );
// console.log(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"]));
console.log(solution(2, 10, 2, ["09:10", "09:09", "08:00"]));
console.log(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"]));
