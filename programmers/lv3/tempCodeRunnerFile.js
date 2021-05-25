function time(n) {
  let number = String(n).split("");
  number = number.replace(/[^0-9]/g, "");
  number = number.map((x) => +x);
  if (number[number.length - 2] >= 6) {
    number[number.length - 2] -= 6;
    number[number.length - 3]++;
  }
  return Number(number.join(""));
}
function solution(n, t, m, timetable) {
  var answer = "";
  timetable = timetable.map((x) => Number(x));
  return answer;
}
console.log(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"]));
console.log(time("08:00"));