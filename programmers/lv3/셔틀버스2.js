function getMinutes(n) {
  let number = String(n)
    .split(":")
    .map((x) => +x);
  return Number(number[0]) * 60 + Number(number[1]);
}
function getAnswer(n) {
  let h = parseInt(n / 60);
  let m = n % 60;
  return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
}
function solution(n, t, m, timetable) {
  var answer = "";
  timetable = timetable.map((x) => getMinutes(x));
  let bus = Array(n)
    .fill(0)
    .map((x, i) => [9 * 60 + i * Number(t)]);
  timetable.sort((a, b) => a - b).filter((x) => x <= bus[n - 1][0]);
  answer = bus[n - 1][0];
  for (let i = 0; i < n; i++) {
    let count = timetable.filter((x) => x <= bus[i]).length;
    console.log(count, timetable);
    if (i === n - 1 && count >= m) answer = timetable[m - 1] - 1;
    timetable.splice(0, count > m ? m : count);
  }
  console.log(answer);
  return getAnswer(answer);
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
console.log(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"]));
console.log(solution(2, 10, 2, ["09:10", "09:09", "08:00"]));
console.log(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"]));
