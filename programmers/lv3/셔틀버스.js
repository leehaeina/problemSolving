function solution(n, t, m, timetable) {
  let answer = "";
  const getMinutes = (n) => {
    return n.split(":")[0] * 60 + n.split(":")[1] * 1;
  };
  const getAnswer = (n) => {
    let h = parseInt(n / 60);
    let m = n % 60;
    return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
  };
  let bus = Array(n)
    .fill(0)
    .map((x, i) => [540 + (i * t)]);
  timetable = timetable.sort((a, b) => a - b).filter((x) => x <= bus[n - 1][0]);
  answer = bus[n - 1][0];
  for (let i = 0; i < n; i++) {
    let count = timetable.filter((x) => x <= bus[i][0]).length;
    if (i === n - 1 && count >= m) {
      console.log("hi");
      answer = timetable[m - 1] - 1;
    } else timetable.splice(0, count > m ? m : count);
  }
  return getAnswer(answer);
}
